

import { webtech } from '@/constants/webtech'

function Technologies() {
  return (
    <div className="flex flex-col flex-wrap items-center"> {/*sm:mb-22 sm:mb-6 mb-6*/}

        <div className=' flex flex-row  max-w-[100%] md:space-x-14 ss:space-x-10 '>

            {webtech.map((item, index) => 
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-12 min-w-0 ss:scale-100 scale-75 icons flex justify-start items-center flex-row my-3 mx-0 px-1"
                  src={item.src}
                  alt={item.name}
                  title={item.name}
                />
              </a>
            )}
            
            
        </div>
    </div>
  )
}

export default Technologies;