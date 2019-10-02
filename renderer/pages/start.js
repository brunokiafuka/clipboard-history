import { Component, useState, useEffect, useCallback } from 'react'
const App = () =>  {
  const [data, setData] = useState([]);


  const handleMessage = useCallback((event, message) => {
    if(data.includes(message)) return;
    setData([ ...message])
  }, [])

  useEffect(() => {
    // start listening the channel message
    // global.ipcRenderer.send('message', 'fuckkkkkk')
    global.ipcRenderer.on('message', handleMessage);
    return () => global.ipcRenderer.removeListener('message', handleMessage);
  }, [handleMessage])

    if(!data) return <p>No content to show ...</p>
  return (
    <div className="container">
      <div className="section">
        <ul className="scrollable-content content">
          {data.map(i =>
            (
              <li className="element">
                <p>{i}</p>
              </li>
            )
          )}
        </ul>
      </div>
      <hr />
      <div className="element">
        <p>
          Clear
        </p>
      </div>
      <div className="element">
        <p>
          Quit
        </p>
      </div>






      <style jsx global>
      {`
          body {
            margin: 0;
          }
      `}
      </style>
      <style jsx>
        {`
          .container {
            /* give the outermost container a predefined size */
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 300px;

            display: flex;
            flex-direction: column;

            font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI";
            font-weight: normal;
            width: 300px;
            color: white;
            font-size: 15px;
            margin: 0 auto;
            padding: 0;
            border: 0;
            text-align: left;
          }

          .section {
            flex-grow: 1;

            display: flex;
            flex-direction: column;

            /* for Firefox */
            min-height: 0;
          }
          .scrollable-content {
            flex-grow: 1;
            overflow: auto;
            /* for Firefox */
            min-height: 0;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
            border: 0;
          }

          li {
            margin: 0;
            padding: 0;
            border: 0;
          }

          .element {
            margin: 0;
            padding: 0;
            border: 0;
          }

          .element:hover {
            background-color: #007AFF;
          }
          hr {
            display: block;
            height: 2px;
            border: 0;
            border-top: 2px solid #909090;
            margin: 0.5em 0;
            padding: 0;
          }
          p {
            white-space: nowrap;
            margin: 5px 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 300px;
            max-lines: 1;
            text-overflow: ellipsis;
            text-align: left;
            color:white;
          }
        `}
      </style>
    </div>
  )
}

export default App;
// .container {
  // font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI";
  // font-weight: normal;
  // width: 300px;
  // color: white;
  // font-size: 15px;
  // margin: 0 auto;
  // position:fixed;
  // padding: 0;
  // border: 0;
  // text-align: left;
// }
