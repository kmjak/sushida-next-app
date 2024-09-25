interface OptionsComponentProps {
  setViewMode: (mode: string) => void;
}

export const OptionsComponent = ({
  setViewMode
} : OptionsComponentProps ) => {
  const OptionBar = ({
    optionName,
    title,
  }:{
    optionName: string,
    title: string
  }) => {
    return (
      <h1
        onClick={() => setViewMode(optionName)}
        className="text-center py-2 px-5 text-gray-700 rounded-lg hover:shadow-lg hover:text-black"
      >
        {title}
      </h1>
    )
  }
  return (
    <div className="flex justify-center gap-12 text-lg cursor-pointer px-1 py-3">
      <OptionBar optionName="all" title="一覧" />
      <OptionBar optionName="top3" title="トップ3" />
      <OptionBar optionName="weakness" title="苦手なアルファベット(直近5回)" />
    </div>
  )
}