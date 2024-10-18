import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const GrowthDeveloper = dynamic(() => import('@/components/GrowthDeveloper'), { ssr: false });
const ExpansionStrategies = dynamic(() => import('@/components/ExpansionStrategies'), { ssr: false });
const GrowthAI = dynamic(() => import('@/components/GrowthAI'), { ssr: false });
const AliEstGrowth = dynamic(() => import('@/components/AliEstGrowth'), { ssr: false });
const StrategicAlliances = dynamic(() => import('@/components/StrategicAlliances'), { ssr: false });
const BlogSection = dynamic(() => import('@/components/BlogSection'), { ssr: false });
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GrowthDeveloper />
      <ExpansionStrategies />
      <GrowthAI />
      <AliEstGrowth />
      <StrategicAlliances />
      <BlogSection />
      <CTASection />
    </main>
  );
}