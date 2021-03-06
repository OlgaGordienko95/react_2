import React, {Component} from 'react';
import style from '../css/style1.css'

class Post extends Component {
  render(){
    return (
      <div id="content">
        <div id="post">
        			<img src="https://cs5.livemaster.ru/storage/25/21/a065a79194acbc556b4a370a1diz--ukrasheniya-braslet-iz-ametista-i-agata-zvezdnoe-nebo.jpg"/>
        			<h2 className="title">Не много о нас</h2>
          			<div className="entry">
          				<p>Браслеты уже стали незаменимыми украшениями в нашей жизни. Сегодня это универсальные украшения, которые носят и женщины, и мужчины.
          					Различные материалы, из которых изготавливают браслеты, позволяют подобрать такую модель, которая лучше всего подойдет к Вашему образу.
          				 Кроме материала, обратите внимание и на цветовую гамму украшения:</p>
          				 <ul>
          					 <li>черные;</li>
          					 <li>коричневые;</li>
          					 <li>серые;</li>
          					 <li>синие браслеты</li>
          				 </ul>
          <p>Также украшения на руку из золота, серебра или платины являются достаточно универсальными и гармонично дополняют большинство стильных образов.
          	 Сегодня большую популярность приобрели браслеты «Шамбала». Эти украшения, в общем, относятся к так называемому стилю «унисекс».Женские и мужские
          	 модели браслетов имеют некоторые отличия. Так, большинство мужских браслетов имеют простую, лаконичную форму, пастельные и сдержанные цвета.
          	 Размеры мужских браслетов существенно отличаются. Очень часто мужчины носят браслет из кожи. Он удобен, стильно и модно выглядит, достаточно универсальный.
          	 По желанию такие браслеты дополняют металлическими вставками и накладками. </p>
          <p>Женские браслеты более изысканные. Разнообразные яркие бусины ювелирной кружевной тонкой работы, а также драгоценные камни в женских браслетах.
          	Среди молодежи большой популярностью пользуются браслеты из ниток - так называемые фенечки. Это плетеные браслеты (handmade) ярких цветов и с различными узорами.
          	 Часто девушки изготавливают браслеты из бисера своими руками. Это довольно просто, достаточно лишь иметь нужную схему изделия. Такие браслеты ручной работы
          	 прекрасно дополнят как ежедневный образ, так и праздничный.</p>
                </div>
        			<a href="#" className="more">В магазин</a><a href="#" className="comments">Комментарии</a>
        </div>
      </div>
    )
  }

}

export default Post;
