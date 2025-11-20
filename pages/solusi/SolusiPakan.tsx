import React from 'react';
import { LeafIcon } from '../../components/icons/LeafIcon';

const SolutionSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
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
    </section>
);


const SolusiPakan: React.FC = () => {
    return (
        <SolutionSection title="Manajemen Pakan Ternak" icon={<LeafIcon className="h-10 w-10 text-emerald-600" />}>
            <p><strong>Tujuan:</strong> Mengubah proses pencernaan sapi agar menghasilkan lebih sedikit metana.</p>
            <ul className="list-disc list-inside space-y-2 pl-2 marker:text-emerald-500">
                <li><strong>Suplemen:</strong> Tambahkan suplemen seperti tanin, saponin, atau minyak esensial ke dalam pakan.</li>
                <li><strong>Kualitas Pakan:</strong> Berikan pakan berkualitas tinggi yang lebih mudah dicerna untuk pencernaan yang lebih efisien.</li>
                <li><strong>Konsultasi:</strong> Bicaralah dengan ahli nutrisi ternak untuk merancang ransum pakan yang optimal.</li>
            </ul>
        </SolutionSection>
    );
};

export default SolusiPakan;