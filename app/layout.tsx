import './globals.css';
import Header from '@/components/header/header';
import HeaderBg from '@/components/header/HeaderBg';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="m-0 h-full bg-gradient-to-b from-[#282c34] to-[#282c34] font-['Quicksand'] text-white">
        <HeaderBg />
        <Header />

        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
