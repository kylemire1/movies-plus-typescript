import Button from '../Button';
import { PlusIcon } from '@heroicons/react/outline';
import { PlayIcon, UserGroupIcon } from '@heroicons/react/solid';

const Controls = () => {
  return (
    <div className="flex items-center flex-row flex-wrap gap-4 my-6">
      <Button
        variantName="outline"
        elType="button"
        className="flex items-center md:text-2xl"
      >
        <PlayIcon width={35} height={35} className="mr-2" /> Play
      </Button>
      <Button
        variantName="outline"
        elType="button"
        className="flex items-center md:text-2xl"
      >
        <PlayIcon width={35} height={35} className="mr-2" /> Trailer
      </Button>
      <Button
        variantName="roundIcon"
        elType="button"
        Icon={PlusIcon}
        width={35}
        height={35}
      />
      <Button
        variantName="roundIcon"
        elType="button"
        Icon={UserGroupIcon}
        width={35}
        height={35}
      />
    </div>
  );
};

export default Controls;
