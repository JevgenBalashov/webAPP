import MainPage from './MainPage';

interface Props {
  className?: string;
}

export default function Home({ className }: Props) {
  return (
    <section className={className}>
      <MainPage />
    </section>
  );
}
