import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
    {
      name: 'Potensi Pemanasan (GWP-100)',
      'CO2': 1,
      'Metana (CH4)': 28,
    },
    {
      name: 'Masa Hidup di Atmosfer (Tahun)',
      'CO2': 1000,
      'Metana (CH4)': 12,
    },
];

// Fixed to light theme colors
const COLORS = { co2: '#60A5FA', ch4: '#F59E0B' };

const DataMetana: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
            <div className="max-w-4xl w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Dua Sisi Gas Metana: Potensi & Peluang
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    Metana adalah gas rumah kaca yang sangat kuat. Meskipun masa hidupnya di atmosfer lebih pendek, potensi pemanasannya jauh lebih tinggi daripada CO2 dalam jangka waktu 100 tahun. Ini menjadikannya pedang bermata dua: ancaman besar dalam jangka pendek, sekaligus peluang besar untuk mitigasi yang cepat.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full" style={{ height: '400px' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" barCategoryGap="20%">
                            <XAxis type="number" hide />
                            <YAxis type="category" dataKey="name" width={150} tick={{ fill: '#4b5563', fontSize: 14 }} tickLine={false} axisLine={false} />
                            <Tooltip
                                 contentStyle={{
                                    backgroundColor: '#ffffff',
                                    border: `1px solid #e5e7eb`,
                                    borderRadius: '0.5rem'
                                }}
                                itemStyle={{ color: '#111827' }}
                                cursor={{fill: 'rgba(229, 231, 235, 0.5)'}}
                            />
                            <Legend iconType="circle" wrapperStyle={{ color: '#374151' }}/>
                            <Bar dataKey="CO2" fill={COLORS.co2} radius={[0, 4, 4, 0]} />
                            <Bar dataKey="Metana (CH4)" fill={COLORS.ch4} radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                 <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
                    <div className="p-5 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-lg text-blue-800 mb-2">Potensi Pemanasan Global (GWP)</h4>
                        <p className="text-gray-700">GWP adalah ukuran seberapa banyak panas yang dapat diperangkap oleh sebuah gas dibandingkan dengan CO2. Metana memiliki GWP 28, artinya <strong>1 kg metana memerangkap panas 28 kali lebih banyak</strong> daripada 1 kg CO2 selama periode 100 tahun.</p>
                    </div>
                     <div className="p-5 bg-amber-50 rounded-lg border border-amber-200">
                        <h4 className="font-bold text-lg text-amber-800 mb-2">Masa Hidup & Peluang Aksi Cepat</h4>
                        <p className="text-gray-700">Metana hanya bertahan sekitar 12 tahun di atmosfer, jauh lebih singkat dari CO2. Ini berarti, <strong>pengurangan emisi metana hari ini akan memberikan dampak penurunan laju pemanasan global yang signifikan</strong> dalam waktu yang relatif cepat.</p>
                    </div>
                </div>
                 <p className="text-sm text-gray-500 mt-6">
                    *Data GWP (Global Warming Potential) berdasarkan Laporan Penilaian ke-5 (AR5) IPCC. Angka dapat bervariasi antar laporan.
                 </p>
            </div>
        </div>
    );
};

export default DataMetana;