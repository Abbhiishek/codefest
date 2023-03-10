
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

interface IFaqs {
    question: string,
    answer: string
}

function FaqsCard({ question, answer }: IFaqs) {
    return (
        <Accordion className='!bg-black !border-2 !shadow-lg !shadow-pink-800 !rounded-xl !border-pink-600 !text-white !w-full'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon className='text-white' />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{question}</Typography>
            </AccordionSummary>
            <hr className='text-yellow-400 bg-black' />
            <AccordionDetails>
                <Typography dangerouslySetInnerHTML={{ __html: answer }}>
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default FaqsCard