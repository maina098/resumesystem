import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Hero from '@/components/Hero/Hero';
import FilterBar from '@/components/FilterBar/FilterBar';
import TemplateGrid from '@/components/TemplateGrid/TemplateGrid';

export default function Home() {
  return (
    <main>
      <Breadcrumbs />
      <Hero />
      <FilterBar />
      <TemplateGrid />
    </main>
  );
}
