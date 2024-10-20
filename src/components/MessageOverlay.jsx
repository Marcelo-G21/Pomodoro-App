export default function MessageOverlay({ showMessage, message }) {
    return (
      showMessage && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-indigo-700 bg-opacity-50 z-30 ${showMessage ? 'fade-out' : ''}`}
        >
          <span className="text-4xl md:text-6xl font-bold text-white">{message}</span>
        </div>
      )
    );
  }
  