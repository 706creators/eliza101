import { Module } from '../types/module';
import { modules } from '../data/modules';

export function useModules(): Module[] {
  return modules;
}