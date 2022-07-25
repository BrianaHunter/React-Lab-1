import AdDesigner from './AdDesigner'

interface AdProps
 {
  flavor: string;
  fontSize: number;
  darkTheme: boolean;
}
function Ad({ flavor, fontSize, darkTheme }: AdProps) {

    if ()
  return (
    <div>
      <div
        style={{
          height: "100px",
          width: "200px",
          border: "2px solid black",
          boxShadow: "3px 3px 5px lightgray",
        }}
      >
        {" "}
      </div>
    </div>
  );
}

export default Ad;
