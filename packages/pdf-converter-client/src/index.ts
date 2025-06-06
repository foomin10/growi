/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Api documentation
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export type PdfCtrlSyncJobStatus202Status = typeof PdfCtrlSyncJobStatus202Status[keyof typeof PdfCtrlSyncJobStatus202Status];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PdfCtrlSyncJobStatus202Status = {
  HTML_EXPORT_IN_PROGRESS: 'HTML_EXPORT_IN_PROGRESS',
  HTML_EXPORT_DONE: 'HTML_EXPORT_DONE',
  FAILED: 'FAILED',
  PDF_EXPORT_DONE: 'PDF_EXPORT_DONE',
} as const;

export type PdfCtrlSyncJobStatus202 = {
  status: PdfCtrlSyncJobStatus202Status;
};

/**
 * @minLength 1
 */
export type PdfCtrlSyncJobStatusBodyStatus = typeof PdfCtrlSyncJobStatusBodyStatus[keyof typeof PdfCtrlSyncJobStatusBodyStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const PdfCtrlSyncJobStatusBodyStatus = {
  HTML_EXPORT_IN_PROGRESS: 'HTML_EXPORT_IN_PROGRESS',
  HTML_EXPORT_DONE: 'HTML_EXPORT_DONE',
  FAILED: 'FAILED',
} as const;

export type PdfCtrlSyncJobStatusBody = {
  appId?: number;
  /** @minLength 1 */
  expirationDate: string;
  /** @minLength 1 */
  jobId: string;
  /** @minLength 1 */
  status: PdfCtrlSyncJobStatusBodyStatus;
};

export interface GenericError {
  /**
   * An error message
   * @minLength 1
   */
  message: string;
  /**
   * The error name
   * @minLength 1
   */
  name: string;
  [key: string]: unknown;
 }

export interface InternalServerError {
  /** A list of related errors */
  errors?: GenericError[];
  /**
   * An error message
   * @minLength 1
   */
  message: string;
  /**
   * The error name
   * @minLength 1
   */
  name: string;
  /** The stack trace (only in development mode) */
  stack?: string;
  /** The status code of the exception */
  status: number;
}





  /**
 * 
    Sync job pdf convert status with GROWI.
    Register or update job inside pdf-converter with given jobId, expirationDate, and status.
    Return resulting status of job to GROWI.
  
 */
export const pdfCtrlSyncJobStatus = <TData = AxiosResponse<PdfCtrlSyncJobStatus202>>(
    pdfCtrlSyncJobStatusBody: PdfCtrlSyncJobStatusBody, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/pdf/sync-job`,
      pdfCtrlSyncJobStatusBody,options
    );
  }

export type PdfCtrlSyncJobStatusResult = AxiosResponse<PdfCtrlSyncJobStatus202>
