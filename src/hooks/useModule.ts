import { Module } from '../types/module';
import { modules } from '../data/modules';

export function useModule(id: string | undefined): Module | undefined {
  if (!id) return undefined;
  return modules.find(module => module.id === id);
}