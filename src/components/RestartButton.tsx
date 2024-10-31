type Props = { onRestart: () => void };

export default function RestartButton({ onRestart }: Props) {
  return (
    <button
      onClick={onRestart}
      className="font-bold bg-primary text-white rounded-3xl py-2 px-4 text-body hover:bg-lightOrange transition duration-500"
    >
      Restart
    </button>
  );
}
