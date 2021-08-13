export type Unpacked<T> = T extends (infer U)[]
  ? U
  : // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends (...args: any[]) => infer K
  ? K
  : T extends Promise<infer H>
  ? H
  : T;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NoProps = {};

export default function name() {
  return ''
}