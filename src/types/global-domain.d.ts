import { OverridableComponent } from '@mui/material/OverridableComponent';

/** domains */
declare global {
  type PageDefinition = {
    path: string;
    public: boolean;
    meta: { title: string; description: string };
    Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
  };
  type Pages = Obj<PageDefinition>;
  type RouterUrl =
    | string
    | {
        pathname: string;
        routeParam?: { [K in number | string]: number | string };
        // query?: Obj<string | string[] | number | number[], string>;
        query?: Obj<number | string>;
        hash?: string | number;
        target?: '_blank';
      };
}
