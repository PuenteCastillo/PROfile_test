import { useState, useEffect, useRef, SVGProps, FC } from "react";

const BrickCard = ({
  brickType,
  brickId,
  onBrickSelect
}: BrickCardProps): JSX.Element | null => {
  const importedSvgRef = useRef<FC<SVGProps<SVGSVGElement>> | any>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importSvg = async () => {
      try {
        importedSvgRef.current = (
          await import(`../../assets/bricks/${brickType}/${brickId.toString()}.svg`)
        ).ReactComponent;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importSvg();
  }, [brickType, brickId]);

  if (!loading && importedSvgRef.current) {
    const { current: ImportedBrickCard } = importedSvgRef;
    return (
      <ImportedBrickCard
        onClick={() => (brickId == 1 ? onBrickSelect(brickType) : null)}
        style={{ maxWidth: "100%" }}
      />
    );
  } else {
    return <></>;
  }
};

export default BrickCard;
