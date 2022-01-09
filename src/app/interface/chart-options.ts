export interface Chart {
  type?: string;
  height?: number;
}

export interface Exporting {
  enabled?: boolean;
}

export interface ButtonOptions {
  height?: number;
  width?: number;
  symbolSize?: number;
  symbolX?: number;
  symbolY?: number;
  symbolStrokeWidth?: number;
}

export interface Navigation {
  buttonOptions?: ButtonOptions;
}

export interface Legend {}

export interface Style {
  fontSize?: string;
}

export interface Title {
  text?: string;
  style?: Style;
}

export interface Credits {
  enabled?: boolean;
}

export interface Bar {
  grouping?: boolean;
}

export interface PlotOptions {
  bar?: Bar;
}

export interface XAxis {
  type?: string;
}

export interface Datum {
  name?: string;
  y?: number;
  x?: number;
}

export interface Series {
  name?: string;
  color?: string;
  data?: Datum[];
}

export interface chartOptions {
  chart?: Chart;
  exporting?: Exporting;
  navigation?: Navigation;
  legend?: Legend;
  title?: Title;
  credits?: Credits;
  plotOptions?: any;
  xAxis?: XAxis;
  series?: Series[];
}
