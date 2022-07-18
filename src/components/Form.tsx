import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { consumers } from "stream";
import { validate } from "../../utils/formRules";
import { Client } from "../core/Client";
import { api } from "../services/api";
import { Button } from "./Button";
import { Input } from "./Input";

interface QueryData extends ParsedUrlQuery {
  id?: string;
  name?: string;
  age?: string;
}

export function Form() {
  const { push } = useRouter();
  const query: QueryData = useRouter().query;

  const [id, setId] = useState<string>(query?.id ?? "");
  const [name, setName] = useState(query?.name ?? "");
  const [age, setAge] = useState(query?.age ?? "");
  const [errors, setErrors] = useState({
    nameError: "",
    ageError: "",
  });

  function handleSubmit() {
    const isValid = validate({ id, age, name, errors }).isValid;
    setErrors(validate({ id, age, name, errors }).errors);

    if (!isValid) {
      return;
    }

    if (id) {
      api.patch("clients", {
        id,
        name,
        age,
      });
			
			push("/");
      return;
    }

    api.post("clients", {
      name,
      age: +age,
    });
    push("/");
  }

  return (
    <div className={`flex flex-col gap-3`}>
      {id && <Input label="" readOnly value={id} />}
      <Input
        label="Nome"
        onChange={(e) => {
          setName(e.target.value);
          if (errors.nameError) {
            setErrors({ ...errors, nameError: "" });
          }
        }}
        type={"text"}
        error={errors.nameError}
        value={name}
      />
      <Input
        label="Idade"
        onChange={(e) => {
          setAge(e.target.value);
          if (errors.ageError) {
            setErrors({ ...errors, ageError: "" });
          }
        }}
        type={"number"}
				inputMode="numeric"
        error={errors.ageError}
        value={age}
      />
      <div className={`flex justify-end gap-1`}>
        <Button color="blue" onClick={handleSubmit}>
          Salvar
        </Button>
        <Link href={"/"}>
          <Button color="gray">Cancelar</Button>
        </Link>
      </div>
    </div>
  );
}
