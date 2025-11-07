import Navigation from '@/components/layout/Navigation';
import { BoothsHero } from '@/components/booths/BoothsHero';
import ExpoHall from '@/components/expo/ExpoHall';

export default function BoothsPage() {
  return (
    <>
      <Navigation />
      <BoothsHero />
      <ExpoHall />
    </>
  );
}
