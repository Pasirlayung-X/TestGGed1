import React from 'react';

const ActionSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
        <div className="text-lg text-gray-600 space-y-2 text-center">
            {children}
        </div>
    </div>
);

const SolusiDukung: React.FC = () => {
    return (
        <ActionSection title="Dukung Peternakan Berkelanjutan">
            <p>Pilih produk dari peternak lokal yang Anda tahu menerapkan praktik-praktik ramah lingkungan. Pembelian Anda adalah bentuk dukungan langsung bagi usaha mereka.</p>
        </ActionSection>
    );
};

export default SolusiDukung;