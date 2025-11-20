import React from 'react';

interface PageStepperProps {
  onPrev?: () => void;
  prevLabel?: string;
  onNext?: () => void;
  nextLabel?: string;
  isLastStep?: boolean;
  onFinish?: () => void;
}

const PageStepper: React.FC<PageStepperProps> = ({ onPrev, onNext, nextLabel, isLastStep, onFinish }) => {
  const CTAButton = () => {
    if (isLastStep) {
      return (
        <button
          onClick={onFinish}
          className="group w-full max-w-md text-center p-8 bg-amber-400 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-300"
        >
            <p className="text-xl text-gray-800 font-medium">Sesi Selesai</p>
            <h3 className="text-3xl font-extrabold text-gray-900 mt-2">
                Kembali ke Beranda
            </h3>
        </button>
      );
    }
    if (onNext) {
      return (
        <button
          onClick={onNext}
          className="group w-full max-w-md text-center p-8 bg-emerald-600 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-400"
        >
          <p className="text-xl text-emerald-100">Pelajari:</p>
          <h3 className="text-4xl font-extrabold text-white mt-2">
            {nextLabel}
          </h3>
        </button>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col items-center text-center py-20 md:py-28 px-4">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <p className="mb-8 text-xl text-gray-600">
          Kalau sudah paham...
        </p>
        
        {CTAButton()}
        
        {onPrev && (
          <button
            onClick={onPrev}
            className="mt-8 text-sm font-medium text-gray-500 hover:text-gray-800 underline transition-colors"
          >
            Kembali ke topik sebelumnya
          </button>
        )}
      </div>
    </div>
  );
};

export default PageStepper;