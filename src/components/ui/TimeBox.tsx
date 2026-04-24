type TimeBoxProps = {
  value: number;
  label: string;
};

export const TimeBox = ({ value, label }: TimeBoxProps) => {
  return (
    <div className="w-10 flex flex-col items-center justify-center rounded-xl bg-white border border-white/30">
      <span className="font-display text-xl md:text-sm text-[#26251e] tracking-[-0.06em]">
        {String(value).padStart(2, "0")}
      </span>

      <span className="font-mono text-[10px] uppercase tracking-wider text-[#26251e]/40">
        {label}
      </span>
    </div>
  );
};
