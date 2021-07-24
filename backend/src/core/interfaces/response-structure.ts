export interface ResponseStructure {
  result?: boolean;
  timestamp?: Date;
  numberCode?: number | undefined | null;
  stringCode?: string | undefined | null;
  message?: string | undefined | null;
  data?: any | undefined | null;
  metaData?: any | undefined | null;
  error?: any | undefined | null;
}
