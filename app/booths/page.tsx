import { BoothsHero } from '@/components/booths/BoothsHero';
import ExpoHall from '@/components/expo/ExpoHall';
import { allBooths } from '@/data/sample-booths';

export default function BoothsPage() {
  // Pass booth data from server component to avoid client bundle bloat
  return (
    <>
      <BoothsHero />
      <ExpoHall booths={allBooths} />
    </>
  );
}
