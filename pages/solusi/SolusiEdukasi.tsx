import React from 'react';

const ActionSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <section className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
            <div className="text-lg text-gray-600 space-y-2 text-center">
                {children}
            </div>
        </div>
    </section>
);

const SolusiEdukasi: React.FC = () => {
    return (
        <ActionSection title="Edukasi dan Advokasi">
            <p>Bagikan pengetahuan yang Anda dapatkan di sini kepada orang lain. Dukung kebijakan yang mempromosikan pertanian berkelanjutan dan energi terbarukan seperti biogas.</p>
        </ActionSection>
    );
};

export default SolusiEdukasi;