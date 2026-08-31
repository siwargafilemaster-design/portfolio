export default function PhoneFrame({
  label = 'Demo video',
  sub,
  size = 'sm',
  videoUrl,
}: {
  label?: string
  sub?: string
  size?: 'sm' | 'lg'
  videoUrl?: string
}) {
  const width = size === 'lg' ? 'w-[172px]' : 'w-[150px]'
  return (
    <div className={`relative ${width} aspect-[9/19] flex-none rounded-[26px] border border-[#1d2b45] bg-night p-2 shadow-xl`}>
      <div className="absolute left-1/2 top-[15px] z-10 h-[5px] w-[52px] -translate-x-1/2 rounded-full bg-[#2a3a5a]" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-2.5 overflow-hidden rounded-[19px] bg-gradient-to-b from-[#16233d] to-[#0e1830]">
        {videoUrl ? (
          <video
            src={videoUrl}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <>
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-brass bg-brass/15">
              <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-brass" />
            </div>
            <div className="px-3 text-center font-mono text-[0.6rem] uppercase tracking-widest text-[#8ba0c8]">{label}</div>
            {sub && <div className="px-3 text-center font-mono text-[0.54rem] text-[#5b6d8f]">{sub}</div>}
          </>
        )}
      </div>
    </div>
  )
}