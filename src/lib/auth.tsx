import { useRouter } from 'next/router';
import { createContext, Context, useContext, useState, useEffect } from 'react';
import firebase from './firebase';

interface Auth {
  uid: string;
  email: string | null;
  name: string | null;
  photoUrl: string | null;
  token: string | null;
}

interface AuthContext {
  auth: Auth | null;
  loading: boolean;
  needsAuth: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const authContext: Context<AuthContext> = createContext<AuthContext>({
  auth: null,
  loading: true,
  needsAuth: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

const formatAuthState = (user: firebase.User): Auth => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  token: null,
});

function useProvideAuth(): AuthContext {
  const [auth, setAuth] = useState<Auth | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const needsAuth = router.pathname !== '/login';

  const handleAuthChange = async (authState: firebase.User | null) => {
    if (!authState) {
      setLoading(false);
      return;
    }
    const formattedAuth = formatAuthState(authState);
    formattedAuth.token = await authState.getIdToken();

    setAuth(formattedAuth);
    setLoading(false);
  };

  const signedIn = async (response: firebase.auth.UserCredential) => {
    if (!response.user) {
      throw new Error('No User');
    }
    setLoading(false);
  };

  const clear = () => {
    setAuth(null);
    setLoading(true);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(signedIn)
      .catch((e) => {
        console.error(e.message);
        setLoading(false);
      });
  };

  const signOut = () => {
    return firebase.auth().signOut().then(clear);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleAuthChange);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (needsAuth && !loading && !auth) {
      router.replace('/login');
    }
  }, [needsAuth, loading, auth]);

  return {
    auth,
    loading,
    signInWithGoogle,
    signOut,
    needsAuth,
  };
}

export function AuthProvider({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
