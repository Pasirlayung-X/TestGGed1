import React from 'react';
import { CowIcon } from '../../components/icons/CowIcon';

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


const SolusiKesehatan: React.FC = () => {
    return (
        <SolutionSection title="Kesehatan dan Genetika Ternak" icon={<CowIcon className="h-10 w-10 text-emerald-600" />}>
            <p><strong>Tujuan:</strong> Meningkatkan efisiensi ternak secara keseluruhan.</p>
            <ul className="list-disc list-inside space-y-2 pl-2 marker:text-emerald-500">
                <li><strong>Ternak Sehat:</strong> Sapi yang sehat memiliki sistem pencernaan yang lebih efisien, menghasilkan lebih sedikit metana per unit produk.</li>
                <li><strong>Program Pemuliaan:</strong> Pilih sapi yang secara genetik lebih efisien dalam mencerna pakan.</li>
            </ul>
        </SolutionSection>
    );
};

export default SolusiKesehatan;