import React from 'react';
import { MethaneIcon } from '../../components/icons/MethaneIcon';

const SolutionSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <div className="flex items-center mb-6">
            <div className="p-4 bg-emerald-100 rounded-full mr-5">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
        </div>
        <div className="text-lg text-gray-600 space-y-4 pl-20">
            {children}
        </div>
    </div>
);


const SolusiKotoran: React.FC = () => {
    return (
        <SolutionSection title="Pengelolaan Kotoran" icon={<MethaneIcon className="h-10 w-10 text-emerald-600" />}>
            <p><strong>Tujuan:</strong> Mencegah kotoran terurai tanpa oksigen (anaerobik) yang melepaskan metana.</p>
            <ul className="list-disc list-inside space-y-2 pl-2 marker:text-emerald-500">
                    <li><strong>Digester Biogas:</strong> Investasi terbaik adalah membangun digester biogas untuk menghasilkan energi terbarukan.</li>
                <li><strong>Kompos:</strong> Olah kotoran menjadi kompos. Proses pengomposan aerobik (dengan oksigen) hampir tidak menghasilkan metana.</li>
                <li><strong>Pembersihan Rutin:</strong> Jaga kebersihan kandang dan kumpulkan kotoran secepatnya.</li>
            </ul>
        </SolutionSection>
    );
};

export default SolusiKotoran;