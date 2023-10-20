import React, { useState } from 'react';
import RaceSelect from '../pages/RaceSelect';
import ClassSelect from '../pages/ClassSelect';
import Abilities from '../pages/abilitiesSelect';
import Description from '../pages/Description';
import Equipment from '../pages/Equipment';
import { Flex, Button } from "@chakra-ui/react";

function MultiPageForm() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);

  const nextPage = () => {
    if (currentPage < totalPageCount) {
      setCurrentPage(currentPage + 1);
      setIsNextDisabled(currentPage === totalPageCount - 1);
      setIsPreviousDisabled(false);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsNextDisabled(false);
    }
    if (currentPage === 2) {
      setIsPreviousDisabled(true);
    }
  };

  const totalPageCount = 5;

  return (
    <div>
      <Flex justifyContent="space-between">
        <Button onClick={previousPage} disabled={isPreviousDisabled}>
          Previous
        </Button>
        <Button
          colorScheme="blue"
          onClick={nextPage}
          isDisabled={isNextDisabled}
        >
          Next
        </Button>
      </Flex>
      {currentPage === 1 && <RaceSelect />}
      {currentPage === 2 && <ClassSelect />}
      {currentPage === 3 && <Abilities />}
      {currentPage === 4 && <Description />}
      {currentPage === 5 && <Equipment />}
    </div>
  );
}

export default MultiPageForm;
