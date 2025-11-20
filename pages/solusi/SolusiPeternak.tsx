import React from 'react';

const SolusiPeternak: React.FC = () => {
    return (
        <div className="space-y-4">
            <section className="min-h-screen flex items-center justify-center text-center">
                 <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Solusi untuk Peternak</h2>
                    <p className="text-xl text-gray-600">
                        Langkah-langkah konkret yang bisa Anda terapkan untuk mengurangi emisi, meningkatkan efisiensi, dan bahkan menciptakan sumber pendapatan baru.
                    </p>
                    <p className="mt-8 text-gray-500 animate-bounce">Scroll ke bawah untuk melihat solusi</p>
                </div>
            </section>
        </div>
    );
};

export default SolusiPeternak;