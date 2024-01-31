// Example NMEA sentence
//$GPGGA,181908.00,3404.7041778,N,07044.3966270,W,4,13,1.00,495.144,M,29.200,M,0.10,0000*40

// Obviously the stream below is not in any of the NMEA sentence formats
// It's just a mockup with some info. If you replace it with one of the
// NMEA sentence formats, then you'll need to adjust the code in the 
// index.html page in order to parse it properly.

var NMEA_STREAM = [
[1,321,7098,32.24873815,-109.1375448],
[2,321,7098,32.24789196,-109.1338768],
[3,321,7098,32.24708647,-109.1303859],
[4,321,7098,32.24623126,-109.12668],
[5,321,7098,32.24541684,-109.1231512],
[6,321,7098,32.24454383,-109.1193695],
[7,321,7098,32.24367654,-109.115613],
[8,321,7098,32.242891,-109.1122107],
[9,321,7098,32.24211706,-109.1088591],
[10,321,7098,32.241506,-109.104849],
[11,321,7098,32.24198041,-109.1015178],
[12,321,7098,32.24177296,-109.0974811],
[13,321,7098,32.24071448,-109.0939151],
[14,321,7098,32.24059838,-109.0904244],
[15,321,7098,32.2401167,-109.0866735],
[16,321,7098,32.23893812,-109.0825502],
[17,321,7098,32.23792867,-109.079019],
[18,321,7098,32.23687797,-109.075344],
[19,321,7098,32.23592922,-109.072026],
[20,321,7098,32.23497507,-109.0687625],
[21,321,7098,32.23350184,-109.0653691],
[22,321,7098,32.23214464,-109.0617077],
[23,321,7098,32.23116858,-109.0583532],
[24,321,7098,32.2304541,-109.0545955],
[25,321,7098,32.22933766,-109.0511481],
[26,321,7098,32.22867162,-109.0464694],
[27,321,7098,32.2293367,-109.0428129],
[28,321,7098,32.22902362,-109.0390763],
[29,321,7098,32.22763333,-109.0358166],
[30,321,7098,32.22634656,-109.0328404],
[31,321,7098,32.22495727,-109.0296271],
[32,321,7098,32.22360847,-109.0257292],
[33,321,7098,32.22407294,-109.0222379],
[34,321,7098,32.22513227,-109.01901],
[35,321,7098,32.22520154,-109.0149733],
[36,321,7098,32.22542452,-109.0115325],
[37,321,7098,32.22567491,-109.0076687],
[38,321,7098,32.22620148,-109.0038861],
[39,321,7098,32.2278039,-109.0006926],
[40,321,7098,32.22914969,-108.9964488],
[41,321,7098,32.22972921,-108.9920848],
[42,321,7098,32.22926117,-108.9886881],
[43,321,7098,32.22880893,-108.9848754],
[44,321,7098,32.22912788,-108.9811514],
[45,321,7098,32.22965739,-108.9780144],
[46,321,7098,32.23009896,-108.9753984],
[47,321,7098,32.23066676,-108.9720346],
[48,321,7098,32.2316789,-108.9685464],
[49,321,7098,32.23333223,-108.9651221],
[50,321,7098,32.23480052,-108.9621225],
[51,321,7098,32.23650257,-108.9590222],
[52,321,7098,32.23825582,-108.9559711],
[53,321,7098,32.24026743,-108.9524702],
[54,321,7098,32.24210049,-108.9492802],
[55,321,7098,32.24407216,-108.9458488],
[56,321,7098,32.24552927,-108.943313],
[57,321,7098,32.24746099,-108.9399513],
[58,321,7098,32.24909662,-108.9371048],
[59,321,7098,32.25090855,-108.9339515],
[60,321,7098,32.25278147,-108.930692],
[61,321,7098,32.25453686,-108.9276371],
[62,321,7098,32.25646853,-108.9242754],
[63,321,7098,32.25806418,-108.9214985],
[64,321,7098,32.25987379,-108.9183493],
[65,321,7098,32.2615071,-108.9155068],
[66,321,7098,32.26340558,-108.9122029],
[67,321,7098,32.26505686,-108.9093272],
[68,321,7098,32.26690396,-108.9061059],
[69,321,7098,32.26845951,-108.9033931],
[70,321,7098,32.27003394,-108.9006473],
[71,321,7098,32.27158947,-108.8979345],
[72,321,7098,32.27328131,-108.8949839],
[73,321,7098,32.27523301,-108.8915803]
];

//AAPKbd4e54318a1a4070be7621686199
//6ec2h-adN9G2qyMeoXaBw0MscyRVyvXqc
//-SbFCJDB9SDNDBre4H2StGZTaOowv-m5QFV