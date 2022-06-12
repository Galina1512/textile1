import Accordion from './Accordion';
import coffe from './coffe.jpg'


function Answer(){
    const accordionData = [
        {
        title: 'Как узнать размеры? Какие параметры в размере евро/двуспальный и тд?',
        content: `Описание всех размеров стандартных комплектов можно найти на нашем сайте в графе «размеры» при выборе комплекта определённого цвета.`
        },
        {
        title: 'Где вы находитесь?',
        content: `Мы представляем интернет-магазин и работаем с курьерской доставкой по всей России. Магазина, шоурума или офиса у нас нет.`
        },
        {
        title: 'Как определить какой размер мне подходит?',
        content: `Подходящий размер комплекта лучше всего определить исходя из нескольких параметров: размер спального места, размер одеяла, размер подушек. *у разных производителей подушек и одеял свои стандарты, они могут не совпадать с нашими стандартными размерами, перед выбором размера комплекта постельного белья home story, пожалуйста, убедитесь в том, что параметры размеров совпадают.`
        }
         ];   
   

    return <div>
            <h2 className='h2'>Часто задаваемые вопросы</h2>
    <div className='main-answer'>
        <div className='left-answer'>
        <img src={ coffe } alt='picture' className='coffe'/>
        </div>    
        <div className="accordion">
            {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
            ))}
        </div>
    </div>

        </div>
     
    
}
export default Answer;