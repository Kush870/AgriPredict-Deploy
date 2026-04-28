
const ENC = {"Region": {"East": 0, "North": 1, "South": 2, "West": 3}, "Soil_Type": {"Chalky": 0, "Clay": 1, "Loam": 2, "Peaty": 3, "Sandy": 4, "Silt": 5}, "Crop": {"Barley": 0, "Cotton": 1, "Maize": 2, "Rice": 3, "Soybean": 4, "Wheat": 5}, "Weather_Condition": {"Cloudy": 0, "Rainy": 1, "Sunny": 2}};
const SCATTER_ACT = [6.683, 3.789, 4.958, 6.118, 7.627, 1.917, 6.926, 3.244, 5.213, 4.211, 5.491, 3.979, 2.836, 6.979, 6.371, 6.357, 5.637, 4.174, 3.461, 8.156, 3.971, 6.228, 2.139, 5.734, 5.316, 7.177, 7.303, 5.791, 4.855, 5.855, 2.757, 4.612, 3.199, 3.754, 4.046, 7.509, 6.822, 3.807, 4.172, 1.607, 6.109, 7.017, 5.94, 7.454, 6.91, 7.449, 6.749, 6.874, 2.744, 6.044, 3.225, 3.267, 4.919, 5.325, 3.57, 4.487, 3.095, 4.858, 3.448, 5.926, 5.288, 5.122, 4.894, 7.462, 3.806, 6.201, 1.457, 4.172, 2.315, 6.669, 6.183, 3.607, 3.117, 6.726, 4.738, 5.776, 6.484, 6.634, 5.944, 3.718, 6.839, 6.008, 2.579, 6.192, 5.371, 7.035, 1.853, 2.542, 7.425, 0.86, 6.943, 6.272, 5.917, 2.88, 7.206, 5.82, 1.341, 6.312, 2.968, 7.425, 0.891, 7.338, 6.393, 3.723, 7.3, 3.052, 6.659, 4.067, 6.023, 4.431, 2.568, 2.621, 3.769, 2.945, 4.774, 3.049, 3.847, 2.618, 5.831, 4.959, 7.52, 2.977, 0.607, 1.935, 6.575, 1.9, 5.938, 4.544, 6.72, 5.064, 6.85, 7.384, 7.822, 4.165, 6.587, 3.845, 6.603, 3.524, 4.697, 6.155, 5.576, 4.383, 5.346, 4.193, 4.091, 2.961, 5.055, 3.596, 3.575, 4.471, 6.845, 6.309, 4.935, 5.227, 5.055, 1.591, 3.104, 2.804, 1.483, 6.948, 4.383, 5.271, 6.728, 5.56, 6.119, 7.761, 5.643, 2.7, 4.434, 1.084, 6.663, 6.464, 5.137, 4.483, 4.728, 3.442, 7.361, 7.824, 3.741, 2.22, 8.521, 4.435, 6.514, 2.651, 5.865, 8.164, 6.81, 6.052, 5.341, 4.619, 5.476, 4.7, 3.586, 2.864, 3.526, 6.404, 4.958, 7.791, 6.744, 6.713, 2.461, 4.918, 4.64, 5.559, 3.946, 5.426, 5.463, 6.528, 4.23, 4.117, 5.798, 7.98, 6.338, 3.795, 1.191, 4.96, 3.045, 4.353, 6.944, 5.788, 2.555, 3.369, 7.313, 4.602, 8.059, 5.194, 2.908, 8.028, 5.274, 3.985, 5.676, 6.954, 5.316, 5.485, 2.684, 5.766, 6.255, 2.966, 4.043, 4.803, 5.45, 2.564, 5.419, 4.757, 4.525, 3.663, 4.683, 1.704, 6.163, 7.548, 2.583, 5.336, 3.314, 6.532, 7.278, 7.864, 2.382, 2.575, 4.527, 6.688, 4.157, 1.612, 5.819, 2.168, 7.11, 4.758, 5.547, 6.591, 5.289, 6.152, 4.287, 2.15, 5.289, 6.265, 5.607, 2.686, 5.401, 7.008, 8.219, 7.409, 5.205, 4.358, 4.068, 5.019, 5.793, 6.543, 3.513, 4.162, 4.371, 3.457, 5.346, 5.681, 1.878, 0.883, 5.347, 5.803, 4.329, 2.859, 3.602, 3.067, 4.237, 1.242, 6.055, 4.341, 2.132, 3.399, 7.08, 4.752, 2.492, 6.194, 1.764, 6.458, 4.809, 4.255, 3.297, 3.471, 4.389, 3.851, 5.415, 5.123, 4.609, 4.175, 3.098, 7.329, 4.332, 4.712, 2.472, 5.406, 5.36, 5.964, 2.167, 2.814, 4.998, 5.754, 4.716, 5.61, 5.323, 5.338, 3.13, 6.613, 6.465, 6.387, 7.445, 7.811, 4.883, 2.625, 4.922, 2.792, 3.258, 4.173, 8.237, 2.918, 5.721, 6.453, 2.959, 4.661, 1.189, 5.21, 5.563, 6.882, 1.551, 1.963, 6.459, 5.111, 0.76, 3.419, 4.893, 1.401, 1.27, 5.932, 4.191, 4.382, 4.727, 2.481, 2.931, 5.119, 6.612, 3.834, 3.82, 3.533, 1.768, 4.983, 5.185, 2.725, 7.207, 4.984, 6.119, 3.925, 3.638, 8.375, 6.243, 8.722, 7.204, 7.506, 2.765, 2.962, 5.896, 3.212, 5.922, 6.539, 7.343, 3.657, 1.643, 5.182, 5.848, 5.881, 6.291, 5.456, 6.887, 5.187, 4.18, 1.215, 3.217, 4.86, 5.277, 6.561, 2.694, 7.858, 4.205, 7.018, 3.999, 2.393, 3.716, 4.759, 2.751, 4.761, 5.807, 5.135, 3.177, 2.903, 5.656, 6.244, 5.73, 3.523, 3.049, 6.182, 3.291, 3.694, 5.333, 2.488, 2.748, 3.989, 3.741, 2.819, 3.301, 3.594, 1.149, 7.644, 5.09, 6.601, 4.942, 4.118, 3.236, 3.988, 4.761, 6.642, 5.05, 4.81, 5.99, 3.264, 4.157, 6.136, 4.701, 5.697, 3.676, 4.059, 3.474, 4.355, 6.979, 4.544, 5.792, 5.548, 3.943, 3.552, 1.894, 4.438, 5.389, 2.224, 4.793, 2.748, 3.219, 4.218, 7.205, 5.582, 4.1, 4.088, 3.071, 3.331, 4.913, 5.745, 2.968, 4.366, 2.301, 4.55, 7.364, 3.19, 3.115, 1.211, 2.147, 7.974];
const SCATTER_PRED = [5.715, 3.566, 5.081, 6.324, 6.882, 2.381, 6.222, 3.177, 4.372, 4.106, 5.488, 4.465, 3.653, 7.222, 5.355, 6.625, 5.381, 3.241, 3.143, 6.873, 4.693, 6.831, 2.064, 5.07, 5.127, 6.14, 6.202, 5.788, 5.48, 6.003, 2.829, 4.764, 2.919, 4.304, 3.521, 6.96, 7.67, 3.663, 4.242, 0.664, 6.295, 6.204, 5.743, 7.283, 7.123, 8.17, 6.689, 8.105, 2.73, 6.331, 3.043, 4.378, 4.861, 6.195, 3.863, 4.301, 4.696, 4.502, 3.376, 6.698, 5.44, 5.541, 4.736, 7.404, 3.594, 6.531, 1.109, 3.88, 2.312, 6.396, 6.315, 3.849, 2.422, 6.871, 3.739, 6.128, 6.19, 5.845, 4.941, 3.786, 6.633, 5.35, 2.131, 5.502, 5.729, 6.157, 1.84, 2.927, 7.021, 1.49, 6.71, 6.843, 6.059, 2.993, 6.696, 5.985, 1.826, 6.356, 2.517, 7.746, 2.602, 7.426, 5.849, 3.828, 6.578, 3.022, 6.579, 3.647, 5.426, 3.893, 1.759, 2.613, 3.833, 3.278, 4.898, 2.987, 3.771, 2.559, 5.121, 4.588, 6.495, 3.335, 1.083, 1.953, 5.718, 2.25, 5.414, 3.399, 6.863, 5.858, 6.557, 8.12, 7.833, 4.094, 6.608, 3.295, 5.438, 3.108, 4.348, 7.146, 6.325, 4.775, 4.915, 4.972, 4.364, 3.382, 5.193, 3.148, 4.361, 4.248, 6.704, 6.439, 5.002, 5.264, 4.913, 1.54, 3.019, 2.84, 1.545, 6.638, 4.683, 4.264, 5.832, 5.162, 6.73, 7.23, 6.232, 2.238, 4.82, 1.747, 6.274, 6.127, 5.231, 4.432, 4.811, 2.891, 7.504, 7.688, 4.261, 2.828, 8.08, 3.567, 6.336, 3.318, 5.359, 7.978, 6.085, 5.897, 5.259, 4.355, 6.156, 5.562, 4.553, 2.925, 3.456, 6.104, 5.252, 7.805, 6.034, 6.048, 3.093, 4.83, 4.623, 5.713, 3.972, 5.088, 5.436, 6.668, 4.653, 3.953, 5.107, 7.984, 5.536, 3.825, 1.089, 4.932, 4.165, 4.514, 6.785, 5.118, 3.046, 2.267, 7.771, 4.244, 7.672, 5.43, 2.874, 7.139, 5.217, 3.997, 5.534, 6.579, 5.323, 6.219, 2.507, 5.161, 6.507, 3.061, 3.466, 5.645, 5.67, 3.054, 5.562, 4.277, 5.467, 3.972, 4.651, 1.143, 6.871, 7.977, 3.093, 5.533, 3.945, 6.419, 6.822, 7.269, 3.441, 2.603, 4.437, 6.392, 4.068, 1.45, 6.009, 1.285, 7.545, 4.9, 5.491, 6.524, 5.167, 5.459, 4.277, 2.738, 5.133, 6.535, 5.783, 2.752, 3.988, 7.896, 7.735, 7.101, 4.787, 4.596, 4.282, 4.628, 4.743, 5.69, 3.451, 3.987, 4.825, 3.397, 5.36, 5.535, 1.802, 0.988, 4.448, 6.017, 4.679, 2.971, 3.911, 2.788, 4.44, 1.361, 6.553, 5.016, 2.588, 3.403, 6.763, 4.791, 2.371, 5.068, 1.514, 7.248, 5.163, 4.831, 4.456, 4.261, 4.737, 5.035, 6.317, 4.851, 4.922, 4.471, 3.183, 7.14, 4.64, 4.174, 4.116, 5.056, 5.632, 5.886, 1.965, 2.564, 5.908, 5.487, 4.698, 5.462, 4.895, 6.198, 3.386, 5.601, 6.197, 6.407, 7.414, 8.35, 4.944, 2.642, 4.421, 3.826, 3.879, 3.995, 7.848, 3.166, 6.699, 6.104, 2.727, 4.138, 1.168, 5.516, 5.507, 5.915, 1.92, 2.358, 6.911, 4.836, 1.16, 3.482, 5.087, 1.366, 1.764, 6.057, 4.586, 5.172, 4.272, 2.358, 2.306, 4.0, 6.831, 3.815, 4.57, 3.991, 1.94, 5.553, 5.11, 2.462, 6.746, 4.812, 6.308, 4.437, 3.298, 7.771, 5.79, 8.005, 6.77, 7.054, 2.944, 2.507, 5.379, 3.352, 7.085, 6.593, 7.166, 3.437, 1.634, 5.637, 5.365, 5.05, 6.088, 4.451, 7.341, 4.033, 3.394, 1.47, 3.392, 4.482, 4.83, 6.946, 3.165, 8.166, 4.99, 6.63, 4.865, 3.044, 4.321, 5.495, 2.491, 4.924, 5.358, 5.677, 4.288, 2.325, 4.909, 6.128, 6.085, 3.813, 3.299, 6.765, 2.62, 3.456, 6.104, 2.397, 2.28, 3.65, 3.944, 2.959, 3.837, 4.333, 2.018, 6.622, 5.411, 6.536, 4.874, 3.956, 3.502, 3.714, 5.341, 6.278, 4.776, 4.598, 5.955, 3.246, 5.385, 5.457, 4.456, 5.37, 3.911, 3.397, 4.239, 4.726, 6.647, 5.104, 5.685, 5.211, 3.371, 3.205, 2.427, 4.859, 5.103, 2.414, 4.923, 2.942, 3.193, 3.802, 6.71, 5.184, 3.857, 3.9, 3.504, 3.048, 5.225, 5.344, 3.976, 4.386, 2.417, 5.042, 6.523, 3.031, 2.172, 1.574, 2.441, 7.448];
const HIST = [{"bin": "0.0-0.5", "count": 1929}, {"bin": "0.5-1.0", "count": 8056}, {"bin": "1.0-1.5", "count": 18676}, {"bin": "1.5-2.0", "count": 31750}, {"bin": "2.0-2.5", "count": 49176}, {"bin": "2.5-3.0", "count": 68792}, {"bin": "3.0-3.5", "count": 83741}, {"bin": "3.5-4.0", "count": 95901}, {"bin": "4.0-4.5", "count": 105477}, {"bin": "4.5-5.0", "count": 107961}, {"bin": "5.0-5.5", "count": 103280}, {"bin": "5.5-6.0", "count": 92454}, {"bin": "6.0-6.5", "count": 79159}, {"bin": "6.5-7.0", "count": 62690}, {"bin": "7.0-7.5", "count": 42329}, {"bin": "7.5-8.0", "count": 27026}, {"bin": "8.0-8.5", "count": 14920}, {"bin": "8.5-9.0", "count": 5404}, {"bin": "9.0-9.5", "count": 973}, {"bin": "9.5-10.0", "count": 75}];
const RAIN_X = [359.2, 848.3, 288.2, 902.6, 905.5, 899.6, 786.4, 103.1, 880.9, 374.5, 599.6, 232.6, 845.4, 374.3, 858.8, 709.9, 451.9, 245.6, 756.0, 667.1, 346.8, 137.7, 184.0, 457.0, 964.9, 523.1, 178.2, 219.2, 420.7, 426.1, 328.7, 931.1, 781.3, 170.7, 643.8, 174.4, 828.7, 838.4, 272.5, 731.3, 595.0, 810.1, 457.3, 530.1, 262.2, 635.6, 153.8, 978.8, 250.5, 211.4, 988.6, 104.8, 484.8, 197.8, 468.8, 202.4, 345.5, 970.3, 414.2, 595.6, 265.3, 642.7, 827.0, 702.4, 759.9, 573.8, 594.8, 914.7, 910.3, 140.8, 572.6, 543.8, 818.5, 824.4, 209.0, 782.4, 818.6, 992.9, 350.4, 462.2, 273.3, 574.7, 401.6, 417.5, 141.8, 416.2, 222.0, 829.0, 117.2, 360.4, 470.9, 462.7, 162.3, 528.4, 199.6, 594.2, 203.3, 906.5, 858.0, 774.3, 716.8, 686.9, 564.4, 708.4, 284.4, 249.8, 941.7, 401.6, 477.1, 251.9, 518.2, 250.9, 303.3, 181.7, 831.6, 912.3, 161.0, 366.6, 688.4, 863.5, 650.4, 837.2, 984.7, 391.4, 309.1, 324.8, 767.7, 380.3, 581.1, 893.9, 917.4, 618.4, 757.4, 523.2, 526.2, 893.5, 391.0, 832.5, 765.3, 542.7, 505.8, 468.3, 548.3, 592.5, 324.2, 435.0, 311.1, 768.5, 696.6, 404.6, 342.0, 947.5, 627.2, 689.8, 301.2, 599.2, 649.5, 495.3, 448.3, 488.6, 886.1, 486.7, 444.8, 928.8, 164.0, 995.5, 552.6, 601.3, 173.7, 551.0, 637.4, 901.7, 585.9, 684.9, 601.5, 654.4, 970.4, 583.8, 320.6, 469.6, 508.7, 420.2, 703.1, 210.5, 901.3, 895.6, 645.8, 152.8, 839.6, 228.5, 752.2, 511.2, 477.7, 226.5, 455.5, 846.7, 905.9, 678.0, 487.3, 720.4, 461.0, 217.7, 904.9, 264.3, 255.3, 810.3, 975.4, 487.8, 531.3, 236.9, 722.0, 931.5, 553.1, 696.8, 732.6, 827.3, 143.6, 597.2, 804.5, 983.6, 943.2, 857.1, 852.2, 547.7, 165.4, 519.5, 313.6, 882.4, 916.5, 213.0, 646.9, 998.0, 432.6, 983.4, 730.4, 707.8, 979.6, 535.7, 708.3, 343.0, 109.4, 956.5, 501.6, 477.1, 807.6, 708.5, 606.0, 626.8, 791.8, 365.0, 983.5, 982.4, 758.9, 683.4, 206.8, 717.8, 849.5, 554.2, 448.3, 188.2, 975.9, 132.0, 830.3, 289.6, 310.6, 985.9, 142.9, 466.9, 279.3, 684.9, 579.3, 257.6, 557.9, 836.7, 348.4, 572.4, 138.6, 402.0, 467.5, 510.0, 481.3, 865.0, 943.8, 868.5, 985.3, 460.1, 897.5, 619.2, 991.2, 625.0, 588.0, 565.2, 921.6, 707.4, 270.5, 374.1, 271.9, 282.8, 561.9, 301.9];
const RAIN_Y = [5.235, 7.097, 2.067, 5.253, 4.748, 6.346, 6.768, 2.31, 7.513, 3.994, 5.728, 3.435, 5.858, 4.436, 5.926, 4.896, 1.227, 3.139, 5.913, 5.439, 2.116, 3.843, 2.448, 2.769, 6.884, 5.418, 2.699, 1.322, 1.869, 5.586, 2.965, 6.015, 5.888, 4.054, 6.042, 1.075, 7.459, 7.383, 3.41, 4.348, 3.107, 5.809, 3.637, 5.726, 0.481, 5.494, 2.369, 7.148, 1.885, 3.566, 6.627, 3.444, 3.811, 4.861, 5.68, 3.356, 3.52, 5.139, 5.116, 4.192, 3.867, 4.723, 6.057, 4.416, 5.436, 6.072, 6.633, 6.609, 6.373, 2.643, 4.003, 4.275, 5.704, 4.741, 0.721, 4.277, 6.547, 6.869, 3.917, 3.926, 4.386, 2.989, 4.244, 3.653, 1.774, 3.912, 1.803, 7.764, 3.748, 2.253, 5.061, 6.11, 1.303, 3.859, 4.879, 3.54, 1.316, 7.943, 5.691, 6.847, 5.801, 3.887, 4.994, 5.159, 1.538, 2.862, 7.064, 4.088, 4.111, 4.607, 2.899, 2.662, 5.361, 4.902, 5.951, 5.691, 3.572, 5.467, 4.838, 3.698, 3.575, 5.999, 5.652, 4.106, 3.883, 4.519, 6.043, 4.734, 3.046, 5.444, 6.7, 5.03, 5.078, 4.015, 3.136, 7.133, 4.285, 7.826, 5.764, 3.813, 3.621, 3.435, 5.627, 6.507, 3.277, 5.768, 3.916, 5.449, 5.437, 4.463, 4.385, 7.341, 5.248, 3.907, 3.506, 4.016, 2.848, 3.192, 3.693, 6.167, 6.127, 3.523, 4.328, 4.711, 2.741, 6.84, 5.189, 6.074, 2.907, 6.149, 5.145, 5.066, 6.695, 4.988, 6.932, 4.465, 8.575, 4.703, 2.791, 5.273, 2.454, 4.977, 6.875, 1.581, 7.569, 5.157, 3.857, 1.667, 5.352, 5.028, 8.282, 6.229, 3.236, 3.514, 3.958, 6.706, 5.039, 3.812, 4.944, 3.39, 3.185, 2.168, 6.996, 3.721, 3.995, 5.17, 6.339, 4.559, 2.62, 2.836, 5.514, 8.151, 3.038, 5.389, 5.959, 6.515, 1.34, 3.237, 5.791, 6.089, 8.429, 4.266, 4.842, 5.187, 2.866, 4.526, 3.334, 4.024, 5.022, 3.303, 4.918, 6.739, 3.529, 6.711, 4.205, 5.264, 6.07, 3.916, 3.081, 2.247, 1.944, 5.526, 3.428, 4.963, 5.46, 5.32, 6.581, 6.594, 5.712, 4.269, 7.673, 6.319, 6.801, 4.379, 1.64, 3.856, 5.631, 4.934, 3.707, 2.375, 7.607, 4.126, 4.547, 4.371, 3.55, 5.81, 4.735, 4.98, 2.038, 3.694, 4.654, 1.844, 3.143, 7.773, 3.185, 6.172, 4.816, 5.122, 4.981, 5.36, 5.537, 5.58, 7.907, 7.877, 6.936, 3.631, 4.919, 6.517, 8.325, 4.73, 4.879, 3.791, 5.736, 5.93, 3.723, 1.773, 2.528, 4.667, 4.22, 3.853];
const CROP_YIELD = {"Barley": 4.649, "Cotton": 4.652, "Maize": 4.643, "Rice": 4.652, "Soybean": 4.655, "Wheat": 4.654};
const SOIL_YIELD = {"Chalky": 4.654, "Clay": 4.646, "Loam": 4.652, "Peaty": 4.652, "Sandy": 4.65, "Silt": 4.65};
const REGION_YIELD = {"North": 4.61, "East": 4.67, "South": 4.63, "West": 4.66};
const REGION_SOIL_YIELD = {
  "Chalky": {"North": 4.603, "East": 4.672, "South": 4.620, "West": 4.663},
  "Clay": {"North": 4.592, "East": 4.663, "South": 4.621, "West": 4.648},
  "Loam": {"North": 4.622, "East": 4.679, "South": 4.644, "West": 4.668},
  "Peaty": {"North": 4.609, "East": 4.669, "South": 4.633, "West": 4.661},
  "Sandy": {"North": 4.601, "East": 4.657, "South": 4.624, "West": 4.646},
  "Silt": {"North": 4.613, "East": 4.664, "South": 4.632, "West": 4.651}
};
const WEATHER_YIELD = {"Cloudy": 4.648, "Rainy": 4.65, "Sunny": 4.653};
const FERT_IMPACT = {"False": 3.901, "True": 5.4};
const IRR_IMPACT = {"False": 4.052, "True": 5.25};
const IMPORTANCES = {"Rainfall": 60.7, "Fertilizer": 20.1, "Irrigation": 12.6, "Temperature": 2.8, "Days_to_Harvest": 1.6, "Crop": 0.7, "Soil": 0.7, "Region": 0.5, "Weather": 0.4};

// Slider live labels
document.getElementById('rainfall').addEventListener('input',e=>document.getElementById('rain-val').textContent=e.target.value);
document.getElementById('temperature').addEventListener('input',e=>document.getElementById('temp-val').textContent=e.target.value);
document.getElementById('days').addEventListener('input',e=>document.getElementById('days-val').textContent=e.target.value);

function toggleBtn(btnId, hiddenId){
  const btn=document.getElementById(btnId);
  const hid=document.getElementById(hiddenId);
  if(hid.value==='1'){btn.textContent='✗ No';btn.className='toggle-btn';hid.value='0';}
  else{btn.textContent='✓ Yes';btn.className='toggle-btn on';hid.value='1';}
}

function showTab(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  
  const tabElement = document.getElementById('tab-'+name);
  if(tabElement){
    tabElement.classList.add('active');
  }
  
  // Find and activate the clicked tab button
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    if(tab.textContent.includes('Analysis') && name === 'charts') {
      tab.classList.add('active');
    } else if(tab.textContent.includes('Retrain') && name === 'retrain') {
      tab.classList.add('active');
    } else if(tab.textContent.includes('About') && name === 'about') {
      tab.classList.add('active');
    } else if(tab.textContent.includes('Predict') && name === 'predict') {
      tab.classList.add('active');
    } else if(tab.textContent.includes('Model Details') && name === 'models') {
      tab.classList.add('active');
    }
  });
  
  // Initialize charts when charts tab is clicked
  if(name === 'charts') {
    setTimeout(function() {
      initCharts();
    }, 100);
  }
  
  // Initialize model details when models tab is clicked
  if(name === 'models') {
    setTimeout(function() {
      initModelDetails();
    }, 100);
  }
}

function findNearest(arr, val){
  return arr.reduce((best,v)=>Math.abs(v-val)<Math.abs(best-val)?v:best, arr[0]);
}

const RAIN_LEVELS=[200,400,550,700,900];
const TEMP_LEVELS=[18,27,37];

function predict(){
  const crop=document.getElementById('crop').value;
  const region=document.getElementById('region').value;
  const soil=document.getElementById('soil').value;
  const weather=document.getElementById('weather').value;
  const rainfall=parseInt(document.getElementById('rainfall').value);
  const temp=parseInt(document.getElementById('temperature').value);
  const fert=document.getElementById('fert-val').value;
  const irr=document.getElementById('irr-val').value;
  const days=parseInt(document.getElementById('days').value);

  // Call backend API
  const apiUrl = 'http://localhost:5000/predict';
  
  const payload = {
    crop: crop,
    region: region,
    soil_type: soil,
    rainfall: rainfall,
    temperature: temp,
    fertilizer: fert === '1' ? 'true' : 'false',
    irrigation: irr === '1' ? 'true' : 'false',
    weather_condition: weather,
    days_to_harvest: days
  };

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      alert('Error: ' + data.error);
      return;
    }

    const pred = data.prediction;
    const insights = data.insights;
    const avg = 4.65;
    const pct = ((pred - avg) / avg * 100).toFixed(1);
    const sign = pct >= 0 ? '+' : '';

    let qualBadge = '';
    if (pred < 2) qualBadge = '<span class="badge badge-red">Low yield</span>';
    else if (pred < 4) qualBadge = '<span class="badge badge-amber">Below average</span>';
    else if (pred < 6) qualBadge = '<span class="badge badge-green">Average</span>';
    else qualBadge = '<span class="badge badge-green">High yield</span>';

    const fertText = fert === '1' ? 'with fertilizer' : 'without fertilizer';
    const irrText = irr === '1' ? 'with irrigation' : 'without irrigation';

    let insightHtml = insights.map(insight => `<div style="margin:.4rem 0;">• ${insight}</div>`).join('');

    document.getElementById('result-val').textContent = pred.toFixed(2);
    document.getElementById('result-insight').innerHTML =
      `${qualBadge}<br>This prediction is <strong>${sign}${pct}%</strong> vs the dataset average (4.65 t/ha).<br>
      Key conditions: ${rainfall}mm rainfall, ${temp}°C, ${fertText}, ${irrText}.<br>
      <strong style="margin-top:.6rem;display:block;">Insights:</strong>
      ${insightHtml}`;
    document.getElementById('result-box').classList.add('visible');

    updateScatterWithPoint(pred);
    document.getElementById('your-point-note').style.display='block';
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to connect to backend. Make sure the server is running on http://localhost:5000');
  });
}

let avpChart=null;
let userPoint=null;

function updateScatterWithPoint(userPred){
  if(!avpChart) {
    if (typeof initCharts === 'function') initCharts();
  }
  if(!avpChart) return;
  const userActual=userPred+(Math.random()-.5)*0.8;
  avpChart.data.datasets[1].data=[{x:userActual.toFixed(2),y:userPred.toFixed(2)}];
  avpChart.update();
}

// Retraining functions
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (!file.name.endsWith('.csv')) {
    alert('Please select a CSV file');
    return;
  }

  uploadAndRetrain(file);
}

function uploadAndRetrain(file) {
  const formData = new FormData();
  formData.append('file', file);

  document.getElementById('upload-status').style.display = 'none';
  document.getElementById('training-progress').style.display = 'block';

  fetch('http://localhost:5000/retrain', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('training-progress').style.display = 'none';
    
    const statusDiv = document.getElementById('upload-status');
    const messageDiv = document.getElementById('status-message');
    
    if (data.success) {
      statusDiv.style.background = 'var(--green-pale)';
      statusDiv.style.border = '2px solid var(--green)';
      statusDiv.style.color = 'var(--green)';
      messageDiv.innerHTML = `
        <div style="font-weight:600;margin-bottom:.5rem;">✓ Model Retrained Successfully!</div>
        <div style="font-size:.9rem;">
          <div>• Samples used: ${data.rf_metrics.total_samples}</div>
          <div>• Train/Test split: ${data.rf_metrics.train_size} / ${data.rf_metrics.test_size}</div>
          <div>• R² Score (XGB): ${data.xgb_metrics.r2.toFixed(4)}</div>
          <div>• RMSE (XGB): ${data.xgb_metrics.rmse.toFixed(4)}</div>
          <div>• MAE (XGB): ${data.xgb_metrics.mae.toFixed(4)}</div>
          <div>• Training seed: ${typeof data.rf_metrics.seed !== 'undefined' ? data.rf_metrics.seed : 'n/a'}</div>
          <div>• Trained at: ${data.rf_metrics.trained_at ? new Date(data.rf_metrics.trained_at).toLocaleString() : new Date().toLocaleString()}</div>
        </div>
      `;
      statusDiv.style.display = 'block';
      if (typeof fetchGlobalMetrics === 'function') fetchGlobalMetrics();
    } else {
      statusDiv.style.background = '#fff0f0';
      statusDiv.style.border = '2px solid #c53030';
      statusDiv.style.color = '#c53030';
      messageDiv.innerHTML = `<div style="font-weight:600;">✗ Training Failed</div><div style="font-size:.9rem;margin-top:.3rem;">${data.error}</div>`;
      statusDiv.style.display = 'block';
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('training-progress').style.display = 'none';
    const statusDiv = document.getElementById('upload-status');
    const messageDiv = document.getElementById('status-message');
    statusDiv.style.background = '#fff0f0';
    statusDiv.style.border = '2px solid #c53030';
    statusDiv.style.color = '#c53030';
    messageDiv.innerHTML = `<div style="font-weight:600;">✗ Connection Error</div><div style="font-size:.9rem;margin-top:.3rem;">Failed to connect to backend. Make sure the server is running.</div>`;
    statusDiv.style.display = 'block';
  });
}

function loadModelMetrics() {
  fetch('http://localhost:5000/metrics')
    .then(response => response.json())
    .then(data => {
      document.getElementById('metric-r2').textContent = data.r2.toFixed(4);
      document.getElementById('metric-rmse').textContent = data.rmse.toFixed(4);
      document.getElementById('metric-seed').textContent = data.seed !== undefined ? data.seed.toString() : '—';
      document.getElementById('last-trained').textContent = new Date(data.trained_at).toLocaleString();
    })
    .catch(error => {
      console.error('Error loading metrics:', error);
    });
}

// Drag and drop support
const uploadZone = document.getElementById('upload-zone');
if (uploadZone) {
  uploadZone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    uploadZone.style.background = 'var(--green-light)';
    uploadZone.style.borderColor = 'var(--green)';
  });

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.style.background = 'var(--green-light)';
    uploadZone.style.borderColor = 'var(--green)';
  });

  uploadZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadZone.style.background = 'var(--bg)';
    uploadZone.style.borderColor = 'var(--border)';
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.style.background = 'var(--bg)';
    uploadZone.style.borderColor = 'var(--border)';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.name.endsWith('.csv')) {
        uploadAndRetrain(file);
      } else {
        alert('Please drop a CSV file');
      }
    }
  });
}

// Load metrics on page load
let chartsInitialized = false;

window.addEventListener('load', function() {
  loadModelMetrics();
  // Charts will be initialized when user clicks the Analysis tab
});

// ---- CHARTS ----
function initCharts(){
  if(chartsInitialized) return; // Only initialize once
  chartsInitialized = true;
  const G='#1a6b3c', A='#c17f24', B='#1565c0', P='#6b46c1', T='#0d7a6a';

  // 1. Actual vs Predicted scatter
  const scatterPts=SCATTER_ACT.map((a,i)=>({x:a,y:SCATTER_PRED[i]}));
  const ctx1=document.getElementById('avp-chart');
  avpChart=new Chart(ctx1,{
    type:'scatter',
    data:{
      datasets:[
        {label:'Dataset samples',data:scatterPts,backgroundColor:'rgba(26,107,60,0.25)',borderColor:'rgba(26,107,60,0.5)',pointRadius:3,pointHoverRadius:5},
        {label:'Your prediction',data:[],backgroundColor:'#ef4444',borderColor:'#ef4444',pointRadius:10,pointHoverRadius:12,pointStyle:'star'}
      ]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:ctx=>`Actual: ${ctx.parsed.x.toFixed(2)} | Pred: ${ctx.parsed.y.toFixed(2)}`}}},
      scales:{
        x:{title:{display:true,text:'Actual Yield (t/ha)',color:'#718096'},grid:{color:'rgba(0,0,0,.05)'}},
        y:{title:{display:true,text:'Predicted Yield (t/ha)',color:'#718096'},grid:{color:'rgba(0,0,0,.05)'}}
      }
    }
  });

  // 2. Feature Importance (horizontal bar)
  const impLabels=['Rainfall','Fertilizer','Irrigation','Temperature','Days to Harvest','Crop','Soil','Region','Weather'];
  const impVals=[60.7,20.1,12.6,2.8,1.6,0.7,0.7,0.5,0.4];
  const impColors=['#1a6b3c','#2d9e5f','#3ab56e','#c17f24','#e0a843','#1565c0','#4a90d9','#6b46c1','#9f6cf5'];
  new Chart(document.getElementById('imp-chart'),{
    type:'bar',
    data:{labels:impLabels,datasets:[{label:'Importance %',data:impVals,backgroundColor:impColors,borderRadius:4}]},
    options:{
      indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.parsed.x.toFixed(1)}%`}}},
      scales:{x:{grid:{color:'rgba(0,0,0,.05)'},ticks:{callback:v=>v+'%'}},y:{grid:{display:false}}}
    }
  });

  // 3. Avg Yield by Crop
  const cropLabels=Object.keys(CROP_YIELD);
  const cropVals=Object.values(CROP_YIELD);
  new Chart(document.getElementById('crop-chart'),{
    type:'bar',
    data:{labels:cropLabels,datasets:[{label:'Avg Yield (t/ha)',data:cropVals,backgroundColor:[G,A,B,P,T,'#c53030'],borderRadius:6}]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.parsed.y.toFixed(3)} t/ha`}}},
      scales:{y:{min:4.5,max:4.75,grid:{color:'rgba(0,0,0,.05)'}},x:{grid:{display:false}}}
    }
  });

  // 4. Fertilizer & Irrigation (grouped)
  new Chart(document.getElementById('fert-chart'),{
    type:'bar',
    data:{
      labels:['Fertilizer: No','Fertilizer: Yes','Irrigation: No','Irrigation: Yes'],
      datasets:[{
        label:'Avg Yield',
        data:[FERT_IMPACT['False'],FERT_IMPACT['True'],IRR_IMPACT['False'],IRR_IMPACT['True']],
        backgroundColor:['#ef4444',G,'#ef4444',B],
        borderRadius:6
      }]
    },
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.parsed.y.toFixed(3)} t/ha`}}},
      scales:{y:{min:3.5,max:6,grid:{color:'rgba(0,0,0,.05)'}},x:{grid:{display:false}}}
    }
  });

  // 5. Yield by Soil Type
  const soilLabels=Object.keys(SOIL_YIELD);
  const soilVals=Object.values(SOIL_YIELD);
  new Chart(document.getElementById('soil-chart'),{
    type:'bar',
    data:{labels:soilLabels,datasets:[{label:'Avg Yield (t/ha)',data:soilVals,backgroundColor:[G,A,B,P,T,'#c53030'],borderRadius:6}]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.parsed.y.toFixed(3)} t/ha`}}},
      scales:{y:{min:4.5,max:4.75,grid:{color:'rgba(0,0,0,.05)'}},x:{grid:{display:false}}}
    }
  });

  // 6. Average Yield by Region
  const regionLabels=Object.keys(REGION_YIELD);
  const regionVals=Object.values(REGION_YIELD);
  new Chart(document.getElementById('region-chart'),{
    type:'bar',
    data:{labels:regionLabels,datasets:[{label:'Avg Yield (t/ha)',data:regionVals,backgroundColor:[B,G,T,A],borderRadius:6}]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.parsed.y.toFixed(3)} t/ha`}}},
      scales:{y:{min:4.5,max:4.75,grid:{color:'rgba(0,0,0,.05)'}},x:{grid:{display:false}}}
    }
  });

  // 7. Soil × Region Yield Matrix
  const matrixDiv=document.getElementById('matrix-table');
  const soils=Object.keys(REGION_SOIL_YIELD);
  const regions=Object.keys(REGION_YIELD);
  let tableHtml='<table class="feat-table" style="width:100%;min-width:560px;"><thead><tr><th>Soil \ Region</th>' + regions.map(r=>`<th>${r}</th>`).join('') + '</tr></thead><tbody>';
  soils.forEach(soil=>{
    tableHtml += `<tr><td>${soil}</td>` + regions.map(region=>`<td>${REGION_SOIL_YIELD[soil][region].toFixed(3)}</td>`).join('') + '</tr>';
  });
  tableHtml += '</tbody></table>';
  matrixDiv.innerHTML = tableHtml;

  // 8. Rainfall vs Yield scatter (full width)
  const rainPts=RAIN_X.map((x,i)=>({x,y:RAIN_Y[i]}));
  new Chart(document.getElementById('rain-chart'),{
    type:'scatter',
    data:{datasets:[{label:'Yield sample',data:rainPts,backgroundColor:'rgba(26,107,60,0.3)',borderColor:'rgba(26,107,60,0.6)',pointRadius:4}]},
    options:{
      responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`Rain: ${c.parsed.x} mm | Yield: ${c.parsed.y.toFixed(2)} t/ha`}}},
      scales:{
        x:{title:{display:true,text:'Rainfall (mm)',color:'#718096'},grid:{color:'rgba(0,0,0,.05)'}},
        y:{title:{display:true,text:'Yield (t/ha)',color:'#718096'},grid:{color:'rgba(0,0,0,.05)'}}
      }
    }
  });
}

// ---- NEW FUNCTIONS FOR TUNING AND COMPARISON ----
function runTuning() {
  const enableTuning = document.getElementById('tune-rf-checkbox').checked;
  
  document.getElementById('tuning-status').style.display = 'block';
  document.getElementById('tuning-status').style.background = 'var(--amber-light)';
  document.getElementById('tuning-status').style.border = '2px solid var(--amber)';
  document.getElementById('tuning-status').style.color = 'var(--amber)';
  document.getElementById('tuning-status').innerHTML = '<div style="font-weight:600;">⚙️ Running Hyperparameter Tuning...</div><div style="font-size:.9rem;margin-top:.3rem;">This may take several minutes.</div>';
  
  fetch('http://localhost:5000/retrain', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      enable_tuning: enableTuning
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      document.getElementById('tuning-status').style.background = 'var(--green-pale)';
      document.getElementById('tuning-status').style.border = '2px solid var(--green)';
      document.getElementById('tuning-status').style.color = 'var(--green)';
      document.getElementById('tuning-status').innerHTML = '<div style="font-weight:600;">✓ Tuning Completed!</div>';
      
      if (data.tuning_results) {
        let resultsHtml = '<div style="margin-top:1rem;"><strong>Best Parameters:</strong></div>';
        resultsHtml += `<div>n_estimators: ${data.tuning_results.best_params.n_estimators}</div>`;
        resultsHtml += `<div>max_depth: ${data.tuning_results.best_params.max_depth}</div>`;
        resultsHtml += `<div>min_samples_split: ${data.tuning_results.best_params.min_samples_split}</div>`;
        resultsHtml += `<div style="margin-top:.5rem;"><strong>Best Score:</strong> ${data.tuning_results.best_score.toFixed(4)}</div>`;
        document.getElementById('tuning-results').innerHTML = resultsHtml;
        
        // Load validation curve
        loadValidationCurve();
      }
      
      loadModelMetrics();
      loadModelComparison();
    } else {
      document.getElementById('tuning-status').style.background = '#fff0f0';
      document.getElementById('tuning-status').style.border = '2px solid #c53030';
      document.getElementById('tuning-status').style.color = '#c53030';
      document.getElementById('tuning-status').innerHTML = `<div style="font-weight:600;">✗ Tuning Failed</div><div style="font-size:.9rem;margin-top:.3rem;">${data.error}</div>`;
    }
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('tuning-status').style.background = '#fff0f0';
    document.getElementById('tuning-status').style.border = '2px solid #c53030';
    document.getElementById('tuning-status').style.color = '#c53030';
    document.getElementById('tuning-status').innerHTML = '<div style="font-weight:600;">✗ Connection Error</div><div style="font-size:.9rem;margin-top:.3rem;">Failed to connect to backend.</div>';
  });
}

function loadModelComparison() {
  fetch('http://localhost:5000/metrics')
    .then(response => response.json())
    .then(data => {
      if (data.models) {
        // Update metrics cards
        document.getElementById('rf-r2').textContent = data.models.rf.r2.toFixed(4);
        document.getElementById('rf-rmse').textContent = data.models.rf.rmse.toFixed(4);
        document.getElementById('rf-mae').textContent = data.models.rf.mae.toFixed(4);
        
        document.getElementById('xgb-r2').textContent = data.models.xgb.r2.toFixed(4);
        document.getElementById('xgb-rmse').textContent = data.models.xgb.rmse.toFixed(4);
        document.getElementById('xgb-mae').textContent = data.models.xgb.mae.toFixed(4);
        
        // Load comparison charts
        loadComparisonCharts(data.models);
      }
    })
    .catch(error => {
      console.error('Error loading model comparison:', error);
    });
}

function loadValidationCurve() {
  fetch('http://localhost:5000/chart-data/validation-curve')
    .then(response => response.json())
    .then(data => {
      const ctx = document.getElementById('validation-curve-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.train_sizes,
          datasets: [
            {
              label: 'Training Score',
              data: data.train_scores,
              borderColor: 'var(--green)',
              backgroundColor: 'rgba(26, 107, 60, 0.1)',
              tension: 0.4
            },
            {
              label: 'Validation Score',
              data: data.val_scores,
              borderColor: 'var(--amber)',
              backgroundColor: 'rgba(193, 127, 36, 0.1)',
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            tooltip: { mode: 'index', intersect: false }
          },
          scales: {
            x: { title: { display: true, text: 'Training Set Size' } },
            y: { title: { display: true, text: 'Score' }, min: 0.8, max: 1.0 }
          }
        }
      });
    })
    .catch(error => {
      console.error('Error loading validation curve:', error);
    });
}

function loadComparisonCharts(models) {
  // Learning curves comparison
  fetch('http://localhost:5000/chart-data/learning-curve')
    .then(response => response.json())
    .then(data => {
      const ctx = document.getElementById('learning-curve-chart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.train_sizes,
          datasets: [
            {
              label: 'RF Training Score',
              data: data.rf_train_scores,
              borderColor: 'var(--green)',
              backgroundColor: 'rgba(26, 107, 60, 0.1)',
              tension: 0.4
            },
            {
              label: 'RF Validation Score',
              data: data.rf_val_scores,
              borderColor: 'var(--green)',
              backgroundColor: 'rgba(26, 107, 60, 0.1)',
              borderDash: [5, 5],
              tension: 0.4
            },
            {
              label: 'XGB Training Score',
              data: data.xgb_train_scores,
              borderColor: 'var(--blue)',
              backgroundColor: 'rgba(21, 101, 192, 0.1)',
              tension: 0.4
            },
            {
              label: 'XGB Validation Score',
              data: data.xgb_val_scores,
              borderColor: 'var(--blue)',
              backgroundColor: 'rgba(21, 101, 192, 0.1)',
              borderDash: [5, 5],
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            tooltip: { mode: 'index', intersect: false }
          },
          scales: {
            x: { title: { display: true, text: 'Training Set Size' } },
            y: { title: { display: true, text: 'Score' } }
          }
        }
      });
    })
    .catch(error => {
      console.error('Error loading learning curve:', error);
    });

  // Residuals plot
  fetch('http://localhost:5000/chart-data/residuals')
    .then(response => response.json())
    .then(data => {
      const ctx = document.getElementById('residuals-chart');
      new Chart(ctx, {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'RF Residuals',
              data: data.rf_residuals.map((r, i) => ({ x: data.predictions[i], y: r })),
              backgroundColor: 'rgba(26, 107, 60, 0.6)',
              pointRadius: 3
            },
            {
              label: 'XGB Residuals',
              data: data.xgb_residuals.map((r, i) => ({ x: data.predictions[i], y: r })),
              backgroundColor: 'rgba(21, 101, 192, 0.6)',
              pointRadius: 3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            tooltip: { callbacks: { label: ctx => `Pred: ${ctx.parsed.x.toFixed(2)} | Residual: ${ctx.parsed.y.toFixed(2)}` } }
          },
          scales: {
            x: { title: { display: true, text: 'Predicted Yield' } },
            y: { title: { display: true, text: 'Residual' } }
          }
        }
      });
    })
    .catch(error => {
      console.error('Error loading residuals:', error);
    });
}

// Initialize comparison tab when clicked
document.addEventListener('DOMContentLoaded', function() {
  // Add click handlers for new tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const tabName = this.textContent.toLowerCase();
      if (tabName.includes('tuning')) {
        showTab('tuning');
      } else if (tabName.includes('comparison')) {
        showTab('comparison');
        loadModelComparison();
      }
    });
  });
});

// ---- MODEL DETAILS FUNCTIONS ----
function selectModel(modelType) {
  // Update button states
    document.getElementById('rf-model-btn').classList.remove('active');
  document.getElementById('xgb-model-btn').classList.remove('active');
  if(document.getElementById('tuned-rf-model-btn')) document.getElementById('tuned-rf-model-btn').classList.remove('active');
  document.getElementById(modelType + '-model-btn').classList.add('active');
  
  // Update model details visibility
  document.getElementById('rf-model-details').classList.remove('active');
  document.getElementById('xgb-model-details').classList.remove('active');
  if(document.getElementById('tuned-rf-model-details')) document.getElementById('tuned-rf-model-details').classList.remove('active');
  document.getElementById(modelType + '-model-details').classList.add('active');
  
  // Load model data
  loadModelMetrics(modelType);
  loadModelCharts(modelType);
}

function initModelDetails() {
  // Load initial model (Random Forest)
  selectModel('rf');
}

function loadModelMetrics(modelType) {
  fetch('http://localhost:5000/metrics')
    .then(response => response.json())
    .then(data => {
      if (data[modelType]) {
        const metrics = data[modelType];
        document.getElementById(modelType + '-detail-r2').textContent = metrics.r2.toFixed(4);
        document.getElementById(modelType + '-detail-rmse').textContent = metrics.rmse.toFixed(4);
        document.getElementById(modelType + '-detail-mae').textContent = metrics.mae.toFixed(4);
        document.getElementById(modelType + '-detail-cv-r2').textContent = metrics.cv_mean_r2.toFixed(4);
      }
    })
    .catch(error => {
      console.error('Error loading model metrics:', error);
    });
}

function loadModelCharts(modelType) {
  // Load learning curve
  fetch(`http://localhost:5000/chart-data/${modelType}-learning-curve`)
    .then(response => response.json())
    .then(data => {
      const ctx = document.getElementById(`${modelType}-learning-curve-chart`);
      
      // Clear existing chart if it exists
      if (window[`${modelType}LearningChart`]) {
        window[`${modelType}LearningChart`].destroy();
      }
      
      window[`${modelType}LearningChart`] = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.train_sizes,
          datasets: [
            {
              label: 'Training Score',
              data: data.train_scores_mean,
              borderColor: 'var(--green)',
              backgroundColor: 'rgba(26, 107, 60, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Validation Score',
              data: data.val_scores_mean,
              borderColor: 'var(--amber)',
              backgroundColor: 'rgba(193, 127, 36, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            tooltip: { mode: 'index', intersect: false }
          },
          scales: {
            x: { 
              title: { display: true, text: 'Training Set Size' },
              ticks: { callback: v => `${v}%` }
            },
            y: { 
              title: { display: true, text: 'R² Score' },
              min: 0.7, max: 1.0 
            }
          }
        }
      });
    })
    .catch(error => {
      console.error(`Error loading ${modelType} learning curve:`, error);
    });
  
  // Load validation curve
  fetch(`http://localhost:5000/chart-data/${modelType}-validation-curve`)
    .then(response => response.json())
    .then(data => {
      const ctx = document.getElementById(`${modelType}-validation-curve-chart`);
      
      // Clear existing chart if it exists
      if (window[`${modelType}ValidationChart`]) {
        window[`${modelType}ValidationChart`].destroy();
      }
      
      window[`${modelType}ValidationChart`] = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.param_range,
          datasets: [
            {
              label: 'Training Score',
              data: data.train_scores_mean,
              borderColor: 'var(--green)',
              backgroundColor: 'rgba(26, 107, 60, 0.1)',
              fill: true,
              tension: 0.4
            },
            {
              label: 'Validation Score',
              data: data.val_scores_mean,
              borderColor: 'var(--amber)',
              backgroundColor: 'rgba(193, 127, 36, 0.1)',
              fill: true,
              tension: 0.4
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
            tooltip: { mode: 'index', intersect: false }
          },
          scales: {
            x: { 
              title: { display: true, text: 'Number of Estimators' }
            },
            y: { 
              title: { display: true, text: 'R² Score' },
              min: 0.8, max: 1.0 
            }
          }
        }
      });
    })
    .catch(error => {
      console.error(`Error loading ${modelType} validation curve:`, error);
    });
}

// ---- GLOBAL HERO METRICS ----
function fetchGlobalMetrics() {
  fetch('http://localhost:5000/metrics')
    .then(response => response.json())
    .then(data => {
      if (data.xgb && data.rf) {
        const r2 = data.xgb.r2.toFixed(4);
        const r2Percent = (data.xgb.r2 * 100).toFixed(1);
        const mae = data.xgb.mae.toFixed(3);
        const totalSamples = (data.rf && data.rf.total_samples) ? data.rf.total_samples : 1000000;
        
        let samplesDisplay = totalSamples >= 1000000 ? (totalSamples/1000000).toFixed(1) + 'M' : (totalSamples/1000).toFixed(1) + 'K';
        
        const headerBadge = document.getElementById('header-model-badge');
        if (headerBadge) headerBadge.textContent = `XGBoost · R² ${r2} · ${samplesDisplay} samples`;
        
        const heroR2 = document.getElementById('hero-r2');
        if (heroR2) heroR2.textContent = r2;
        
        const heroR2Sub = document.getElementById('hero-r2-sub');
        if (heroR2Sub) heroR2Sub.textContent = `Explains ${r2Percent}% of yield variance`;
        
        const heroMae = document.getElementById('hero-mae');
        if (heroMae) heroMae.textContent = mae;
        
        const heroSamplesMain = document.getElementById('hero-samples-main');
        if (heroSamplesMain) heroSamplesMain.textContent = samplesDisplay;
        
        const heroSamplesSub = document.getElementById('hero-samples-sub');
        if (heroSamplesSub) heroSamplesSub.textContent = `${totalSamples.toLocaleString()} cleaned records`;

        // Wait for DOM to finish rendering
        setTimeout(() => {
          const rfBtn = document.getElementById('rf-model-btn');
          if (rfBtn && !rfBtn.classList.contains('active')) {
             // Let the specific models re-render if loaded
             // loadModelMetrics('rf');
          }
        }, 50);
      }
    })
    .catch(error => console.error('Error fetching global metrics:', error));
}

// Call on startup
document.addEventListener('DOMContentLoaded', fetchGlobalMetrics);



