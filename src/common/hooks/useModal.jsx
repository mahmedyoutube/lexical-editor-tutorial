import { useCallback, useMemo, useState } from "react";
import * as React from "react";

import Modal from "../../components/ui/Modal";

export default function useModal() {
  const [modalContent, setModalContent] = useState(null);

  const onClose = useCallback(() => {
    setModalContent(null);
  }, []);

  const modal = useMemo(() => {
    if (modalContent === null) {
      return null;
    }
    const { title, content, closeOnClickOutside } = modalContent;
    return (
      <Modal
        onClose={onClose}
        title={title}
        open={!!modalContent}
        closeOnClickOutside={closeOnClickOutside}
      >
        {content}
      </Modal>
    );
  }, [modalContent, onClose]);

  const showModal = useCallback(
    (
      title,
      // eslint-disable-next-line no-shadow
      getContent,
      closeOnClickOutside = false
    ) => {
      setModalContent({
        closeOnClickOutside,
        content: getContent(onClose),
        title,
      });
    },
    [onClose]
  );

  return [modal, showModal];
}
