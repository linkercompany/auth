/**
 * This file was automatically generated by joi-to-typescript
 * Do not modify this file manually
 */

export interface base {
  body?: {
    age?: number;
    name?: string;
  };
  query?: {
    name?: string;
  };
  user?: {
    permissions?: any;
  };
}

export interface query {
  name?: string;
}

export interface sample {
  age?: number;
  name?: string;
}

export interface sampleRequired {
  age: number;
  name: string;
}
