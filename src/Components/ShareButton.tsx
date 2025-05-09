const ShareButton = ({ currentNote }: { currentNote: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentNote).then(() => {
      alert("Love note copied to clipboard!");
    });
  };

  return (
    <button
      className="mt-4 px-4 py-2 bg-purpleGlow font-heading text-white rounded-full hover:brightness-90"
      onClick={copyToClipboard}
    >
      Share this Note 💌
    </button>
  );
};

export default ShareButton;
