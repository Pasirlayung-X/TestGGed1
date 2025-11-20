import React from 'react';
import { CowIcon } from '../../components/icons/CowIcon';

const FullScreenSection: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <section>
        {children}
    </section>
);

const SumberMetana: React.FC = () => {
  return (
      <FullScreenSection>
         <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200">
            <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-100 rounded-full mr-4">
                <CowIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">Sumber Metana dari Peternakan</h3>
            </div>
            <div className="text-lg text-gray-600 space-y-3 pl-16">
                <p>Sumber utama metana di peternakan sapi berasal dari dua hal:</p>
                <ul className="list-disc list-inside space-y-2 pl-2 marker:text-blue-500">
                    <li><strong>Fermentasi Enterik:</strong> Proses pencernaan alami pada sapi yang menghasilkan metana sebagai produk sampingan. Gas ini dikeluarkan terutama melalui <span className="font-bold">sendawa</span>, bukan kentut.</li>
                    <li><strong>Limbah Kotoran:</strong> Saat kotoran sapi terurai dalam kondisi anaerobik (tanpa oksigen), seperti di laguna penampungan limbah, ia akan melepaskan gas metana dalam jumlah besar.</li>
                </ul>
            </div>
        </div>
      </FullScreenSection>
  );
};

export default SumberMetana;