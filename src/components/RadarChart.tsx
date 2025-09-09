import { ResponsiveRadar } from '@nivo/radar';

interface RadarChartProps {
  data: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realWorld: number;
  };
}

export const RadarChart = ({ data }: RadarChartProps) => {
  const chartData = [
    {
      dimension: 'Will',
      score: data.will,
    },
    {
      dimension: 'Interest', 
      score: data.interest,
    },
    {
      dimension: 'Skill',
      score: data.skill,
    },
    {
      dimension: 'Cognitive',
      score: data.cognitive,
    },
    {
      dimension: 'Ability',
      score: data.ability,
    },
    {
      dimension: 'Real-World',
      score: data.realWorld,
    }
  ];

  return (
    <div className="h-96 w-full">
      <ResponsiveRadar
        data={chartData}
        keys={['score']}
        indexBy="dimension"
        maxValue={100}
        margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor="hsl(210, 100%, 60%)"
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={8}
        dotColor="hsl(210, 100%, 60%)"
        dotBorderWidth={2}
        dotBorderColor="hsl(220, 15%, 6%)"
        enableDotLabel={false}
        colors={['hsl(210, 100%, 60%)']}
        fillOpacity={0.15}
        blendMode="multiply"
        animate={true}
        motionConfig="wobbly"
        theme={{
          background: 'transparent',
          text: {
            fontSize: 12,
            fill: 'hsl(220, 10%, 95%)',
            outlineWidth: 0,
            outlineColor: 'transparent'
          },
          axis: {
            domain: {
              line: {
                stroke: 'hsl(220, 13%, 15%)',
                strokeWidth: 1
              }
            },
            legend: {
              text: {
                fontSize: 12,
                fill: 'hsl(220, 10%, 95%)',
                outlineWidth: 0,
                outlineColor: 'transparent'
              }
            },
            ticks: {
              line: {
                stroke: 'hsl(220, 13%, 15%)',
                strokeWidth: 1
              },
              text: {
                fontSize: 11,
                fill: 'hsl(220, 10%, 65%)',
                outlineWidth: 0,
                outlineColor: 'transparent'
              }
            }
          },
          grid: {
            line: {
              stroke: 'hsl(220, 13%, 15%)',
              strokeWidth: 1
            }
          }
        }}
      />
    </div>
  );
};