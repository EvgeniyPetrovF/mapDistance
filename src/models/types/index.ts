export interface MapboxResponse {
  suggestions: Suggestion[];
  attribution: string;
  version: string;
  response_uuid: string;
}

export interface Suggestion {
  feature_name: string;
  matching_name: string;
  highlighted_name: string;
  description: string;
  result_type: string[];
  language: string;
  action: Action;
  maki: string;
  category?: string[];
  category_ids?: string[];
  internal_id: string;
  external_ids: ExternalIds;
  mapbox_id: string;
  context: Context[];
  metadata: Metadata;
}

export interface Action {
  endpoint: string;
  method: string;
  body: Body;
  multi_retrievable: boolean;
}

export interface Body {
  id: string;
}

export interface ExternalIds {
  federated: string;
  foursquare?: string;
  mbx_poi?: string;
  carmen?: string;
  zenrin_landmark?: string;
}

export interface Context {
  layer: string;
  localized_layer: string;
  name: string;
  mapbox_id?: string;
}

export interface Metadata {
  iso_3166_1: string;
  iso_3166_2?: string;
  reading?: Reading;
}

export interface Reading {
  ja_kana: string;
}
