import { Utils } from "utils.js";

const ZERO = {x:0, y:0, z:0};

/**
 * ...
 */
class Bezier {

  constructor() {
    // normalize constructor arguments
    this.setup(points);
  }

  setup(points=[]) {
    this.points = points;
    this.derivative = Utils.getDerivative(points);
  }

  length() {
    // compute arc length for this curve
  }

  getLUT(n=100) {
    // build a LUT[n] of on-curve points
  }

  isPointOn({x,y,z}, error=0.000001) {

  }

  project({x,y,z}) {

  }

  get(t) {
    // alias for compute(t)
  }

  point(index) {
    // get a curve control point
  }

  compute(t) {
    // get an on-curve point for time value t
  }

  raise() {
    // compute the Bezier curve one order higher than this one
  }

  derivative(t) {
    return this._derivative.get(t);
  }

  derivative(t) {
    return this._derivative._derivative.get(t);
  }

  inflections() {
    return utils.inflections(this.points);
  }

  normal(t) {
    // compute the normal at time value t
  }

  skeleton(t) {
    // compute the full generative skeleton for time value t
  }

  split(t) {
    // split the curve at time value t
  }

  segment(t1, t2) {
    // get the segment between t1 and t2 (inclusive)
  }

  extrema() {
    // compute the curve extrema
  }

  bbox() {
    // compute the curve bounding box
  }

  offset(t, d=1) {
    // compute a point offset from the curve at time value t, at distance d along the normal
  }

  isSimpleCurve() {
    // check whether this curve is a "simple" curve, meaning it has no inflections, and shallow curvature
  }

  reduce() {
    // reduce this curve to a collection of (connected) simple curves
  }

  scale(s=1) {
    // scale this curve with respect to the center of its curvature.
    // Note that this requires the curve to be a simple curve.
  }

  outline(d=1) {
    // Generate a "fat offset" of this curve, with capped ends.
  }

  overlaps(other) {
    // determine whether this curve overlaps another curve
  }

  findIntersections(curve) {
    // find all intersections with some other curve
  }

  findIntersectionsWithLine(line) {
    // Effectively, a root finding exercise
  }

  findSelfIntersections() {
    // Find self-intersections
  }

  arcs() {
    // approximate this curve as a sequence of circular arcs
  }
};

Bezier.fit(points) {
  // perform a curve fitting such that the curve passes through each point.
}

export { Bezier };
