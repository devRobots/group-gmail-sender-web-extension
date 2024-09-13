export function GroupHeader(
  { sender, count }: { sender: string, count: number }
) {
  return (
    <div className="Wg aAr">
      <div className="d9yJeb">
        <h3 className="Wr" id=":1m" role="button">
          <img alt="" src="//ssl.gstatic.com/ui/v1/icons/mail/images/cleardot.gif" id=":1p" className="qi Wp Wq" />
          <div className="Wn" id=":1n">
            <span id=":1o" className="qh">{sender}</span>
          </div>
        </h3>
      </div>
      <div className="chp5lb">
        <div className="Wm" data-tooltip="Mostrar más mensajes" aria-label="Mostrar más mensajes" role="button">
          <span className="Di">&nbsp;
            <div id=":mf" className="J-J5-Ji amH">
              <span className="Dj">
                <span className="ts">{count}</span>
              </span>
            </div>&nbsp;
          </span>
        </div>
      </div>
    </div>
  )
}

export function GroupTable({ items }: { items: Array<Element> }) {
  return (
    <table id=":2x" className="F cf zt" role="grid" aria-readonly="true">
      <colgroup>
        <col className="k0vOLb" />
        <col className="Ci" />
        <col className="y5" />
        <col className="WA" />
        <col className="yY" />
        <col className="null" />
        <col className="eSDBXb" />
        <col className="yg" />
        <col className="xX" />
        <col className="bq4" />
        <col className="amZ" />
      </colgroup>
      <tbody ref={(ref) => {
        items.map((item) => {
          ref?.appendChild(item)
        })
      }}>
      </tbody>
    </table>
  )
}