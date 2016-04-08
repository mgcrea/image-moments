const mgrid = (h, w) => {
  const x = new Array(h).fill(null).map((v, k) => new Array(w).fill(k));
  const y = new Array(h).fill(null).map((v, k) => new Array(w).fill(null).map((_v, i) => i));
  return [y, x];
};

const sum = m =>
  m.reduce((s, v) => s + v.reduce((_s, w) => _s + w, 0), 0);

const _mul = (m1, m2) =>
  m1.slice().map((v, y) => v.slice().map((w, x) => w * m2[y][x]));

const mul = (...matrices) =>
  (matrices.length ? matrices.filter(Boolean).reduce((s, m) => _mul(s, m)) : null);

const dev = (m, mean) =>
  m.slice().map((v, y) => v.slice().map((w, x) => w - mean));

export default function imageMoments(image) {
  const [y, x] = mgrid(25, 20);
  const moments = {};

  // Raw or spatial moments
  const m = (i, j) =>
    sum(mul(mul.apply(null, new Array(i).fill(y)), mul.apply(null, new Array(j).fill(x)), image));
  moments.m00 = m(0, 0); // area or sum of grey level
  moments.m01 = m(0, 1);
  moments.m10 = m(1, 0);
  moments.m11 = m(1, 1);
  moments.m02 = m(0, 2);
  moments.m20 = m(2, 0);
  moments.m12 = m(1, 2);
  moments.m21 = m(2, 1);
  moments.m03 = m(0, 3);
  moments.m30 = m(3, 0);

  // Centroid
  moments.mx = moments.m01 / moments.m00; // mean
  moments.my = moments.m10 / moments.m00; // mean
  const xMoments = dev(x, moments.mx); // standard deviation
  const yMoments = dev(y, moments.my); // standard deviation

  // Central moments
  // @desc translation invariant
  // @url https://en.wikipedia.org/wiki/Image_moment#Central_moments
  const mu = (i, j) =>
    sum(mul(mul.apply(null, new Array(i).fill(yMoments)), mul.apply(null, new Array(j).fill(xMoments)), image));
  moments.mu00 = moments.m00;
  moments.mu01 = 0; // sum((yMoments)*image) // should be 0
  moments.mu10 = 0; // sum((xMoments)*image) // should be 0
  moments.mu11 = mu(1, 1);
  moments.mu20 = mu(2, 0); // variance
  moments.mu02 = mu(0, 2); // variance
  moments.mu21 = mu(2, 1);
  moments.mu12 = mu(1, 2);
  moments.mu30 = mu(3, 0);
  moments.mu03 = mu(0, 3);

  // Scale invariants
  // @desc translation and scale invariant
  const nu = (i, j) =>
    moments[`mu${i}${j}`] / Math.pow(moments.mu00, (1 + (i + j) / 2));
  moments.nu11 = nu(1, 1);
  moments.nu12 = nu(1, 2);
  moments.nu21 = nu(2, 1);
  moments.nu20 = nu(2, 0);
  moments.nu03 = nu(0, 3); // skewness
  moments.nu30 = nu(3, 0); // skewness

  return moments;
}
