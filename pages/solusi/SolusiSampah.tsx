import React from 'react';

const ActionSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
        <div className="text-lg text-gray-600 space-y-2 text-center">
            {children}
        </div>
    </div>
);

const SolusiSampah: React.FC = () => {
    return (
        <ActionSection title="Kurangi Sampah Makanan">
            <p>Sekitar sepertiga dari makanan yang diproduksi secara global terbuang. Dengan mengurangi sampah makanan, kita mengurangi tekanan pada seluruh rantai pasok pangan, termasuk peternakan.</p>
        </ActionSection>
    );
};

export default SolusiSampah;