import React from 'react';
import { MethaneIcon } from '../../components/icons/MethaneIcon';

const FullScreenSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-3xl w-full">
            {children}
        </div>
    </section>
);

const DefinisiMetana: React.FC = () => {
  return (
    <div>
      <FullScreenSection>
        <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
                <MethaneIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Apa itu Gas Metana (CH4)?</h3>
            </div>
            <div className="text-lg text-gray-600 space-y-4 pl-16">
                <p>Metana (CH4) adalah gas rumah kaca yang sangat kuat. Meskipun jumlahnya di atmosfer lebih sedikit daripada CO2, kemampuannya dalam memerangkap panas jauh lebih tinggi dalam jangka pendek.</p>
                <p className="font-semibold text-blue-700">Karena masa hidupnya yang lebih singkat di atmosfer (sekitar 12 tahun), mengurangi emisi metana dianggap sebagai salah satu cara tercepat untuk memperlambat laju pemanasan global.</p>
            </div>
        </div>
      </FullScreenSection>
    </div>
  );
};

export default DefinisiMetana;