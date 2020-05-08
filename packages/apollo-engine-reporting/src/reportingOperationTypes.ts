/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AutoregReportServerInfo
// ====================================================

export interface ReportServerInfo_me_UserMutation {
  __typename: 'UserMutation';
}

export interface ReportServerInfo_me_ServiceMutation_reportServerInfo {
  __typename: 'ReportServerInfoResponse';
  inSeconds: number;
  withExecutableSchema: boolean;
}

export interface ReportServerInfo_me_ServiceMutation {
  __typename: 'ServiceMutation';
  /**
   *  Schema auto-registration. Private alpha.
   */
  reportServerInfo: ReportServerInfo_me_ServiceMutation_reportServerInfo | null;
}

export type ReportServerInfo_me =
  | ReportServerInfo_me_UserMutation
  | ReportServerInfo_me_ServiceMutation;

export interface AutoregReportServerInfo {
  me: ReportServerInfo_me | null;
}

export interface ReportServerInfoVariables {
  info: EdgeServerInfo;
  executableSchema?: string | null;
}

/**
 * Edge server info
 */
export interface EdgeServerInfo {
  bootId: string;
  executableSchemaId: string;
  graphVariant: string;
  libraryVersion?: string | null;
  platform?: string | null;
  runtimeVersion?: string | null;
  serverId?: string | null;
  userVersion?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
