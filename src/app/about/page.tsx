import React from 'react'

import Footer from '../components/Footer/page';
import Com from '../components/CommonNav/page';


const Chef = () => {
  return (
    <div>
      <Com/>
    {/* <ComNav/> */}
      {/* Full-Screen Header Image Section */}
      <div className="relative">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />

        <img
          src="https://s3-alpha-sig.figma.com/img/82bc/a07c/de288adf1e3ed51d209d2c3f30979e78?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQL~Nowe5qHeDwvYTwOPBHfxtToNJ3j1p~R65RrtA3PCLRY-hR8k16Auv57VWEHjebKmSFe8OPaBs6m7zHMn3bxM7MSoVmyl3xY8CyFZGqvo6ia80FhQngEdyc2tl6n6WZatLKelDXF~4n5TdAIbVmmqjVwGN~cmZX3pPFvMXwP7c6by92RAYZbIAlqaWceeoeNu9pAUPyGZeRND7npJAFlZPVILvGR7qFdkM4RyJFLWqC3G5sGvPb7v7eRken4Ba3uC~MneFHQHWPCJAu4eMGr-69tGrYJffGvvGSlbjUgMKmVqJHRD3QhKhNkLQEpgp0mVPONTxkQOqdTJPoTC-Q__"
          alt="Sign-in Header"
          className="w-full h-[410px] object-cover"
        />
        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl font-extrabold mb-2">Our Chef</h1>
          <p className="text-lg mb-2">Home / <span className='text-[#FF9F0D]'>Chef</span></p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 flex justify-center items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://plus.unsplash.com/premium_photo-1687697860916-b05b982decbc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Tahmine Rumi</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/f681/af0b/192ccb394a0842f524177a926d687cc4?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NQRL1rHweQ1L~k2PB071svvij2vFV7mawid5OVkO9yydOgXZq7KaxXXOG6ItjnfNYXU-kM-JP775Y0tgAE5Ik1sbPHdeulbCVdqMXE0z-iX9ILDgL60rlmt6lT7dfuenUNfgm5vr458V046mpZqrWg4TPrEmXnTvifOxsIXwk8sIifvLd3sirqVvrhOSUlroGtro-FRaEtMoN7oalOhx6fSJFIgt1SCLpcElv7ayjiS9LCDQK3Js2LIzV4HsGzmY~PYinTVIIbLhvsjCIBkOLkaZdulAoaAxK-0WehfsQk5wMbPk4BnzaD6JytduCqYWkTyjv~hHsMe7ZFyAooHyWQ__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Jorina Begum</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 3 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/d8b7/d7ff/61d7ee8cefa2417cb8da8cc2cbb2361e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvP~7rrqU9t6Q~YHW4Cwi0sbJRdRfOicuRbYTsZ0QdEf1qEHvbhGh9mXO8rkj8yLSWa~W-Q0R0RhjPmql0FZ2UAIEu37ZDrtuOLQ~5vDwh1z9VxfM9EqDZLwPxd849TxF5nG2~xczO2PqZMX5WKHoPwY4pc-i4E1CfQJFoqmL4za3-XGZL6YQYEdK-j9uaPdFdItthA8aIlVbQZZOo1tn2CXaiJ-FUpz~~5RDjNDkyBqqjvrD43Kt16kIV9xmI~yhhd3AhuqFqBQo7PFqkFqc6fKd9jrZiZPCb68WRY3qOWqozcsGwUuuTMi-NC9HM6UsC~BTlHmCBa2udhiMLcXQw__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">M. Mohammad</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/b28e/408b/cb51b7f29bff19f0d7357138ddf92e49?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZehsI-XVVOZBKfQtYk5V82zrdu0jb9AfO~ZtWHAB~dY22Ah~QX5DZfczi4pXI0JTs1f0lInfehDConmQ2205uaBbNyDl8sBAifLLGBCPWIAi~OFKP96Cf1EJCbYrCzRHa8X11JunKjfoA482Jk1e2C4obUYMVnS4wwwq2O0ztNVknwYl6USCmIPvPcghzNGZ2gKnjxvGyNSBEDgXgIWhmHeIqe~l13PTNJ~xW8yMSZ0oi-lUo0hqPNZXIt7OsnncaQ6AF747mHbqyAONeZ8N0kmnmSbGzVhxA3bse~NmVAmarmBwPgrrLU98DMwrbfzjLUxEgV1nsBIWAPccINQnVg__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Munna Kathy</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 5 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/b337/37a1/d404a4850689fa477fcfc8130c8693e7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZdCzWIKF5A~g1BdxUUOancVAZOYtbTI3Zm7c1qStzjvw1XaoJFNvAAOX7w2wptsJv7~UndxZU-4b9W1y6sT93qnGFkIwFePSWrnuLJ6lErFN5nECXnNiEHv70~UQx9utWmtn233Fln9Vo~WBoGGNncc9NVKAdfNBZS9XhyQGDD23d6NO3edFRkrD0e7fnxdmy2AW1VapgiF5J2wZ~uo6jabyuN1~bFk5ncO3RfxEYGKGGKF9hT40rEYnlaW1lfG57L6VCKCyPUkyKGVcNAUHzL9HEgDaqZZ4rBkWuxv9f4BQDc1ffBiYLFpwdkrvNn~Gqk6hEX3AkrMkaGxVUG3rjg__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Sarah Shikha</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 6 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/5204/df90/56263886b4286864815ccb5af6de998d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHjooqcUQolqLCmHnYquUMx45x7eeJ9ke8YegBiq5er734SNADziGZr4DW1a~k3q4i0h6FxWB9LWRFud0odT78OUsalEUo3fpIdiwFHd4uLGM9cpWL-aSoGmkfrL3iAIuohfrk19q5UMkNHLSYg1WNPnNb5894zJem5SUCIz10IIgdqjq8d5B1sjo2rVkEbNIXsddz0cggpGQtdEnFG9OaOtcDS5YMJek~urqoP0Y17v-7qhK-935Dw9ao4eCuwA3JpQckZ3Qxq4sBkqqNbtaFHWK8QQDQcMlhQ9Ji5dGkzVlNVJwjPTmSvQyim0vxvTeAMsD796SJtUuzo~ZPZcpA__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Abdul Khaliq</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 7 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/20da/a03f/527211d24503d37c30dc4c5de744a377?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OG15eseG-S-LG-YH67Nl6NvwLL5YbqGSGf3HAG5Rhdm-uIqTtEN71uA3ACWP845yXRHxMD~SMd-p0j3JQ7O00c~dZtM57yf0TsZA7P3pQV4sMaSpiCD11Lpe7dC3tikWt-YmGN-1jUZz9F1Gr8zNuP4wlocc8v41QYmgRJl74t1nt9ZFbLB~nDcVh13mFJFQAK2DPYfx-x2NcQVFn5pGbXxKiQfXQP5cV~sxNERo8EiSnXVZRrIOb8B3atWNkmtCwxwHmbPxvr2GEmx63uoBB43Qd61gkoUZDho7XLcO-oN2wSLJQQjYk70fWPCfNohiGq5M6QWePrgs8u~d7X4f0g__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Alia Hassan</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 8 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/2f10/e0d8/5a4fd05f6a05a30b851dbea99a15163c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A6OKcu9FQsTiigcrEeV2ZizmHOZ1-UsLV05IDfD0sE~Wztc9zx~bdM-2TVBxo3abf7LvW5p0nAds2eM2A0BUlHc0J0lWP8RH5A1CaziIo64ESn5SjFV7V4pnBFet6aaKpOKMc3OSaCE2UYt3OJ6iAn0EDZQdleDN2pNSfA-tu4o-tyQy-Eq~5OYlfM5DuHtkKJ9Oydu2mIUtU1-Vp9MIzXXr7nYKDnxL1IoiIBz86IIUV7TW2iyPvbeCvW0~Zxo2veTCfPAukQ~R~CzCgh0r73zLKci1S6vrFyW2jbs0sxB~P-ZfkoDpTCKsmqXhtCIpVUjJOzr8vmFOC5c89wZSSQ__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Shazia Parsa</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 9 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/6cba/1b25/aaa5fb29f45562e426b9de89fe9d9ed7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bp7Q3uYWUUwDBR3ppTTTcPgaQQZJARyg0nY9oLrclqjoaUCIupS4RRfUd7rtLsXCYa0wXUkU1rPCfaEyrfpc9Pwb~5jruRr7JsNfq97KEZPRVeG~gGfghHNRz0flgteJdSaTkKReLy-03iObiN2~TgmiP91TX4dq~Nksi1YYIoEBZItQw2YWhaBBxmaQdVWob6TMtDyYMO4whAIB6pnJeQ2s88cvv03EMGNIwmTytjALZ4DKuKWBj9tdnRyCPVx~toV5up1tABp4Hu-vrrqBYl7xCyO4Xj8azn2XDrka9ZJqROCw3o0WcjVZWQzDCj4S-YBh7cPh6eNig3bYa~XvUg__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Ahmed Ali</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 10 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/decf/0517/d3f00e63da45d56d728ed0d393ec2d87?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVrWlmKKIagZ9Eqb0DzysdnVRd9lHauFqOImCFpeGjnEmLZKSAMVfcKOrEHAsfy4h2zsPrDGbpzNhe4Aox5DS7A9hQRdUs7-7uImL6LhD~LOHeYl7notq683ewWf1PGILyt6Euif-3sxSRrD9fImVJHaLAwjBE1zC5-A6pY-ElJudnQ-b7Y6aZItGrhohO1uw6gLiTjEQw14qRtX4B3E0DfSgfOsssGk8snHRE-xKH~Q5uBndpHrUXcvfclRh-nuS~XNlizPD4K8-zOzyeagd8ZsJQi7oTaGPvCmFOZbRPg1EksKSFiCApsrRYKe6x-6z7Pveh3XWmi1PbekDaYRHg__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Farida Mehmood</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 11 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/b60c/f7f7/0c68060c07e4f97d5392df9cd74c496c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0wC9yXMlnXJZ439VUNF9TaPVQJ1~YRrwr2Q7VQmdw6NjpFe9JYl52RcpzvLf6kAOivJ5pcs6xNBdh6Y1ZFJ~jZfGlvgy6Otwl4fakxhDdHMfgTP0~awlDt7G5KtZwhk5b3bXiG7Fo7Oln5AzFvJOj0QBww9EUM4BmGyIBZbBLzgOOLlROncFG6CPF3wX28-CNT5lKNeotuIepj3fFGEe30LHAlsVbc9sx9m2wt6me5hdBx0H5F6T5SmUA932RtGXvh3IX2xmthO9XdKmvKgSdfqpxTTRP~eMRh5tyika4F0qKna~Kl77te-qhjGXULhDafDbcM65H-4zkvla12z8A__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Zara Khan</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
        {/* Card 12 */}
        <div className="bg-white shadow rounded" style={{ width: "240px", height: "350px" }}>
            <img 
                src="https://s3-alpha-sig.figma.com/img/e189/3167/563f6c55854c8926dbc9378bf02cd368?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ox0d5eJXNp1yGG6jufimvGkzlAxqsaSjdo8fAQPgORqePjoyhUnW5mVscZqODyrNFfyh-y6K7F8-rfQuqCSKcEOqwkeLmo8DxnU-qfX2Vtl1Zg7~NyJjizhUCwBJnwEyXEn3yMkBIvt5inAk5Lgy28xDic8VoiP3WMqd2j~U8tud~TZaUVt-XubZ5oleTg2sg2voy1kF7Q6fz4ubAKdNs-Jnr3EyIUdoYNFyGJNmPcCQU13TwTQrpCWxXiohnirHwNZ--wVWXMqadGfCMLEHiXKu3SEsSwxKyztd68CSUMu~yrjF0ufI~EZu98fBhQOqq2Yh16TEW63OgNPtDaBaVw__" 
                alt="Chef Image" 
                className="w-full" 
                style={{ height: "270px", objectFit: "cover" }} 
            />
            <div className="p-2 text-center">
                <h2 className="text-lg font-semibold text-gray-800">Kamran Bilal</h2>
                <p className="text-gray-500">Chef</p>
            </div>
        </div>
    </div>
</div>

      <Footer/>
    </div>
  )
}

export default Chef;
