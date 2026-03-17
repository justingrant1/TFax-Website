/**
 * Deterministic variant picker.
 * Returns the same variant every build for a given seed,
 * but different variants for different seeds (page slugs).
 * This prevents two sibling pages from sharing the same opening sentence
 * while keeping pages cacheable and consistent across builds.
 */
export function pickVariant(variants: string[], seed: string): string {
  if (!variants || variants.length === 0) return ""
  if (variants.length === 1) return variants[0]
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0
  }
  return variants[hash % variants.length]
}

/**
 * Pick a variant using two seeds combined (for matrix pages like doc×device).
 * Ensures the combination produces a unique selection.
 */
export function pickVariantFromPair(variants: string[], seedA: string, seedB: string): string {
  return pickVariant(variants, `${seedA}__${seedB}`)
}
