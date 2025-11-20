import React, { useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import Header from './components/Header';
import Beranda from './pages/Beranda';
import ChecklistPage from './pages/ChecklistPage';
import DefinisiGRK from './pages/grk/DefinisiGRK';
import PenyebabGRK from './pages/grk/PenyebabGRK';
import EfekGRK from './pages/grk/EfekGRK';
import DataGRK from './pages/grk/DataGRK';
import DefinisiMetana from './pages/metana/DefinisiMetana';
import SumberMetana from './pages/metana/SumberMetana';
import EfekMetana from './pages/metana/EfekMetana';
import FungsiMetana from './pages/metana/FungsiMetana';
import DataMetana from './pages/metana/DataMetana';
import SolusiPeternak from './pages/solusi/SolusiPeternak';
import SolusiPakan from './pages/solusi/SolusiPakan';
import SolusiKotoran from './pages/solusi/SolusiKotoran';
import SolusiKesehatan from './pages/solusi/SolusiKesehatan';
import SolusiSesama from './pages/solusi/SolusiSesama';
import SolusiDukung from './pages/solusi/SolusiDukung';
import SolusiSampah from './pages/solusi/SolusiSampah';
import SolusiEdukasi from './pages/solusi/SolusiEdukasi';
import PageStepper from './components/PageStepper';

// Buat sesi dummy karena kita tidak lagi login
const dummySession: Session = {
  access_token: 'dummy-access-token',
  token_type: 'bearer',
  user: {
    id: 'dummy-user-id',
    app_metadata: {},
    user_metadata: {},
    aud: 'authenticated',
    created_at: new Date().toISOString(),
  },
  refresh_token: 'dummy-refresh-token',
  expires_in: 3600,
};

export type Page = {
  main: 'beranda' | 'grk' | 'metana' | 'solusi' | 'checklist';
  sub: string;
}

const pageSequences = {
  grk: [
    { key: 'definisi', label: 'Penyebab', title: 'Definisi GRK', component: <DefinisiGRK /> },
    { key: 'penyebab', label: 'Efek', title: 'Penyebab GRK', component: <PenyebabGRK /> },
    { key: 'efek', label: 'Data', title: 'Efek GRK', component: <EfekGRK /> },
    { key: 'data', label: 'Selesai', title: 'Data GRK', component: <DataGRK /> },
  ],
  metana: [
    { key: 'definisi', label: 'Sumbernya', title: 'Definisi Metana', component: <DefinisiMetana /> },
    { key: 'sumber', label: 'Efeknya', title: 'Sumber Metana', component: <SumberMetana /> },
    { key: 'efek', label: 'Fungsi & Manfaat', title: 'Efek Metana', component: <EfekMetana /> },
    { key: 'fungsi', label: 'Data', title: 'Fungsi Metana', component: <FungsiMetana /> },
    { key: 'data', label: 'Selesai', title: 'Data Metana', component: <DataMetana /> },
  ],
  solusi: [
    { key: 'peternak', label: 'Manajemen Pakan', title: 'Solusi untuk Peternak', component: <SolusiPeternak /> },
    { key: 'pakan', label: 'Pengelolaan Kotoran', title: 'Manajemen Pakan', component: <SolusiPakan /> },
    { key: 'kotoran', label: 'Kesehatan Ternak', title: 'Pengelolaan Kotoran', component: <SolusiKotoran /> },
    { key: 'kesehatan', label: 'Peran Sesama', title: 'Kesehatan Ternak', component: <SolusiKesehatan /> },
    { key: 'sesama', label: 'Dukung Peternak', title: 'Peran Kita Bersama', component: <SolusiSesama /> },
    { key: 'dukung', label: 'Kurangi Sampah', title: 'Dukung Peternak Lokal', component: <SolusiDukung /> },
    { key: 'sampah', label: 'Edukasi', title: 'Kurangi Sampah Makanan', component: <SolusiSampah /> },
    { key: 'edukasi', label: 'Selesai', title: 'Edukasi & Advokasi', component: <SolusiEdukasi /> },
  ]
};

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>({ main: 'beranda', sub: ''});

  const handleNavigate = (main: Page['main'], sub: string = '') => {
    setActivePage({ main, sub });
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const renderPage = () => {
    const { main, sub } = activePage;

    if (main === 'beranda') return <Beranda onNavigate={handleNavigate} />;
    if (main === 'checklist') return <ChecklistPage user={dummySession.user} />; 

    const sequence = pageSequences[main as keyof typeof pageSequences];
    if (!sequence) return <Beranda onNavigate={handleNavigate} />;

    const currentIndex = sequence.findIndex(p => p.key === sub);
    if (currentIndex === -1) return <Beranda onNavigate={handleNavigate} />;

    const currentPage = sequence[currentIndex];
    const prevPage = currentIndex > 0 ? sequence[currentIndex - 1] : null;
    const nextPage = currentIndex < sequence.length - 1 ? sequence[currentIndex + 1] : null;

    const componentWithProps = currentPage.component;

    return (
      <div>
        <div key={`${main}-${sub}`} className="animate-page-enter">
          {componentWithProps}
        </div>
        <PageStepper
          onPrev={prevPage ? () => handleNavigate(main, prevPage.key) : undefined}
          prevLabel={prevPage?.title}
          onNext={nextPage ? () => handleNavigate(main, nextPage.key) : undefined}
          nextLabel={nextPage?.title}
          isLastStep={!nextPage}
          onFinish={() => handleNavigate('beranda')}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-emerald-50 text-gray-800 flex flex-col">
      <Header 
        user={dummySession.user} 
        activePage={activePage}
        onNavigate={handleNavigate}
      />
      <main className="container mx-auto p-4 md:p-8 flex-grow">
        {renderPage()}
      </main>
       <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>2025 GreenHouse Gas Edu. For educational purpose.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;